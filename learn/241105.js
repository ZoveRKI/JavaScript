// 树状数据
// const groupMaster = [
//     {
//         groupID: 1,
//         name: "開発グループ",
//         organization_code: "6a3b843a-8423-42f1-8145-f70c946501c0",
//         teamMaster: [
//             {
//                 teamID: 1,
//                 name: "給与チーム",
//                 organization_code: "a2ae4244-abce-4dfd-8737-0d68ff57d2ea"
//             }
//         ]
//     },
//     {
//         groupID: 2,
//         name: "xxグループ",
//         organization_code: "6a3b84370c946501c0",
//         teamMaster: [
//             {
//                 teamID: 1,
//                 name: "ttチーム",
//                 organization_code: "a2a57d2ea"
//             }
//         ]
//     }
// ];

// // 使用map方法转换数据
// const options = groupMaster.flatMap(group => {
//     // 先添加组的信息
//     const groupOption = { value: group.name, label: group.name };

//     // 再添加组内团队的信息
//     const teamOptions = group.teamMaster.map(team => ({
//         value: `${group.name}${team.name}`,
//         label: `${group.name}${team.name}`
//     }));

//     // 返回组和团队的信息数组
//     return [groupOption, ...teamOptions];
// });

// // 初始化组件数据
// const componentData = {
//     id: "criteria1",
//     title: "所属",
//     isMandatory: false,
//     options
// };

// console.log(componentData);

const occupationMaster = [
    {
        id: 1,
        name: '工程师'
    },
    {
        id: 2,
        name: '企划'
    }
]

const occupationOption = occupationMaster.map((occupation) => (
    {
        value: occupation.name,
        label: occupation.name
    }
));

const occupationData = {
    id: "criteria2",
    title: "职种",
    isMandatory: false,
    option: occupationOption
};

console.log(occupationData);
