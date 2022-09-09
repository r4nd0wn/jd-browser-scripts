function getAllLinks() {
    let containerNodes = document.querySelectorAll("div.event-preview.has-conference");
    let linkNodes = [];
    let links = [];

    for (let sNode of containerNodes) {
        if (sNode.childNodes[1].nodeName === "A") {
            linkNodes.push(sNode.childNodes[1]);
            links.push(sNode.childNodes[1].href);

        }
    }
    console.log(links.join("\n"));

    return {
        linkNodes: linkNodes,
        links: links
    };
}
getAllLinks();