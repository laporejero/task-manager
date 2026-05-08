export type Task = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type Filter = "All" | "Active" | "Completed"