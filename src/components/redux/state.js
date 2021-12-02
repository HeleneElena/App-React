let state = {
    profilePage: {
        posts: [ 
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Yo!', likesCount: 15},
            {id: 3, message: "It's my first post", likesCount: 23},
            {id: 4, message: 'Yo, Frend!', likesCount: 31},
            {id: 5, message: 'Hello, my live', likesCount: 54}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hey!'},
            {id: 2, message: 'Yo!'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Hello'}
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Micha'},
            {id: 3, name: 'Miroslav'},
            {id: 4, name: 'Artur'},
            {id: 5, name: 'Helene'}
        ]
    },
    sidebar: {}
};

export default state;