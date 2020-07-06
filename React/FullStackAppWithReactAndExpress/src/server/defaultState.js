export const defaultState = {
    users: [{
        id:"UI",
        name: "DEV"
    },{
        id:"U2",
        name: "DEV"
    }],
    groups:[{
        name: "To Do",
        id:"G1",
        owner: "U1"
    },{
        name: "To Do",
        id:"G2",
        owner: "U2"
    }],
    tasks:[{
        name:"Do tests - task 1",
        id:"T1",
        group:"G1",
        owner: "U1",
        isComplete:false
    },{
        name:"Do tests - task 2",
        id:"T2",
        group:"G2",
        owner: "U2",
        isComplete:false
    },{
        name:"Do tests - task 3",
        id:"T3",
        group:"G2",
        owner: "U2",
        isComplete:false
    }],
    comments: [{
        owner: "U1",
        id:"C1",
        task:"T1",
        content:"Great Work!!!"
    },{
        owner: "U1",
        id:"C2",
        task:"T1",
        content:"Great Work-C2!!!"
    },{
        owner: "U2",
        id:"C3",
        task:"T2",
        content:"Great Work!!!-C3"
    }]
}