// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function findSameElementOnDOM(element, treeB) {
    let treePath = []
    let current = element

    // find the reverse path up to the root element
    while (current.parentNode){
        let elementIndex = [...current.parentNode.children].indexOf(element)
        treeAPath.push(elementIndex)
        current = current.parentNode
    }

    current = treeB
    while(treePath.length){
        current = current.children[treePath.pop()]
    }

    return current;


}