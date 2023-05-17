export default function If(props){

    const ifChildren = props.children.filter(child => {
        return child
    })

    if (props.test){

        return ifChildren

    } else {

        return false
        
    }
}
