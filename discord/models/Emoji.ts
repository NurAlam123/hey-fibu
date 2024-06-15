const Emoji = (name: string, id: (number | string | null) = null, animated: boolean = false) => {
    return {
        id,
        name,
        animated
    }
}

export default Emoji;