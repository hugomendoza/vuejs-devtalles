import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Project } from '../interfaces/project.interface'
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from '@vueuse/core'

export const useProjectStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []))

  const addProject = (name: string) => {
    if (name.length === 0) return

    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    })
  }

  const addTaskToProject = (porjectId: string, taskName: string) => {
    if (taskName.trim().length === 0) return

    const project = projects.value.find((project) => project.id === porjectId)

    if (!project) return

    project.tasks.push({
      id: uuidv4(),
      name: taskName,
    })
  }

  const toggleTask = (porjectId: string, taskName: string) => {
    const project = projects.value.find((project) => project.id === porjectId)

    if (!project) return

    const task = project.tasks.find((task) => task.name === taskName)

    if (!task) return

    task.completedAt = task.completedAt ? undefined : new Date()
  }

  return {
    //Properties
    projects,

    // Getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const total = project.tasks.length
        const completed = project.tasks.filter((t) => t.completedAt).length
        const completion = total === 0 ? 0 : (completed / total) * 100

        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: Math.round(completion),
        }
      })
    }),

    //Actions
    addProject,
    addTaskToProject,
    toggleTask,
  }
})
