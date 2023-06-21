export interface User {
	id: string
	username: string
	avatar?: string
}

export interface UserSchema {
	AuthData?: User | null
	_inited: boolean
}
