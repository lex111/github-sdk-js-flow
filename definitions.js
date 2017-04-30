//@flow

export type RepositoryEntity = {
    id: number,
    owner: UserEntity,
    name: string,
    url: string,
    sha: string,
    html_url: string,
    comments_url: string,
    fork: boolean,
}

export type UserEntity = {
    login: string,
    id: string,
    avatar_url: string,
}

