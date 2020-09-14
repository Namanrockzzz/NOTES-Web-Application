let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let inpNewTask=$('#inpNewTask')

function addItem(){
    let listItem=$('<li>',{
        'class':'list-group-item',
        'id':'hi',
        text:(inpNewTask.val().slice(0,20)+"...")
    })
    let listItem1=$('<li>',{
        'class':'list-group-item container',
        'id': 'hi1',
        text:inpNewTask.val().replace(/\n/g, "<br />")
    })

    listItem.click(()=>{
        listItem.remove();
    })

    ulTasks.append(listItem)
    ulTasks.append(listItem1)

    console.log(inpNewTask.val())
    inpNewTask.val('')
    toggleInputBtns()
}

function toggleInputBtns(valisempty){
    btnReset.prop('disabled',inpNewTask.val()=='')
    btnAdd.prop('disabled',inpNewTask.val()=='')
}

inpNewTask.on('input',toggleInputBtns)

btnAdd.click(()=>{
    addItem()
})

btnReset.click(()=>{
    inpNewTask.val('')
    toggleInputBtns()
})
