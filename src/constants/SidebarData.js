
export const layout = {
    logo: {
        content: "Muamelat",
        image: "https://ew.com/thmb/eDwL9m9o2zMok8kHJdNyzSN9e0w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spider-man-civil-war_0-049415dd5079404a9c74ef008a60ae97.jpg",
        onClick: () => { alert("Your clicked on logo") }
    },
    menus: [
        {
            id: "overview",
            content: "Overview",
            icon: "icon-objects-column-2",
            onClick: () => console.log("overview")
        },
        {
            id: "client-based",
            content: "Client Based",
            icon: "icon-buildings-3",
            onClick: () => console.log("overview")
        },
        {
            id: "teams",
            content: "Teams",
            icon: "icon-users-two",
            onClick: () => console.log("overview")
        },
        {
            id: "stages-folders",
            content: "Stage",
            icon: "icon-align-right",
            onClick: () => console.log("overview")
        },
        {
            id: "activities",
            content: "Activities",
            icon: "icon-activity",
            onClick: () => console.log("overview")
        },
        {
            id: "operational",
            content: "Operational",
            icon: "icon-gears-arrows-rotate",
            onClick: () => console.log("overview")
        },
        {
            id: "calendar",
            content: "Calendar",
            icon: "icon-calender-days-2",
            onClick: () => console.log("overview")
        }
    ],
    user: {
        name: "Pankaj wandre",
        thumbnail: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        email: "pankajw@nextsmartmove.ai"
    },
    userPopupMenus: [
        {
            icon: "icon-language-2",
            content: "Language",
            subMenus: [
                {
                    content: "Turkish",
                    active: false,
                    onClick: () => { }
                },
                {
                    content: "English",
                    active: true,
                    onClick: () => { }
                },
            ]
        },
        {
            icon: "icon-book-solid",
            content: "User Guides",
            onClick: () => console.log("clicked!")
        },
        {
            content: "Clarification Text",
            onClick: () => console.log("clicked!")
        },
        {
            content: "Consent Text",
            onClick: () => console.log("clicked!")
        },
        {
            icon: "icon-logout",
            content: "Logout",
            onClick: () => console.log("clicked!")
        }
    ],
    theme: {
        color: "#fff",
        bg: "#002874",
        active: "#1F94FF",
        fontMain: "#111519",
        fontLight: "#9EAAB4"
    }
}