// satisfies operator is minimum requirement of this type but can more specific

type Schema = {
    title: string
    dueDate: string | Date
    isCompleted: boolean
}

const schema = {
    title: 'design',
    dueDate: new Date(),
    isCompleted: true
} satisfies Schema

schema.dueDate.setDate(2)

