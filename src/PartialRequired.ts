type TODO = {
    title?: string;
    complete: boolean;
    address?: {
        street?: string
    }
}

type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>>
type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>

type FormTodoRequired = RequiredPick<TODO, 'title'>
type FormTodoPartial = PartialPick<TODO, 'title'>

const todoRequired: FormTodoRequired = {
    title: 'Mahdar'
}

const todo: FormTodoPartial = {
    complete: false
}