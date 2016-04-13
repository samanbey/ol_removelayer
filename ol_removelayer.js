/*
* ol_removelayer.js - Adds "remove layer" button to chosen overlay in OpenLayers 2 layer switcher
*
* (c) 2016 Gede Mátyás
*
* This program is free software; you can redistribute it and/or modify it 
* under the terms of the GNU General Public License as published by the Free Software Foundation; 
* either version 2 of the License, or (at your option) any later version.
*
* usage:
* setRemovable(layer,layerSwitcher)
*
*/

/**
* event handler function that removes the given layer
*/
function removeMe(e) {
    if (confirm('Remove layer '+e.target.layerObject.name+'?'))
        e.target.layerObject.destroy();
}

/**
* Inserts "Remove" button to the given layer in the layerswitcher
* @param layer - the layer object
* @param ls - the LayerSwitcher control object
*/
function setRemovable(layer,ls) {
    // find appropriate section in layerswitcher
    var l=null;
    for (var i in ls.dataLayers)
        if (ls.dataLayers[i].layer===layer) {
            l=ls.dataLayers[i];
            break;
        }
    if (l==null)
        return false;
    // create image element
    var b=document.createElement("img");
    b.onclick=removeMe;b.layerObject=layer;
    b.style='background:white;border:1px solid #999;margin-right:3px;cursor:pointer;';
    b.src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"><line x1="2" y1="2" x2="8" y2="8" stroke-width="1" stroke="darkblue"/><line x1="2" y1="8" x2="8" y2="2" stroke-width="1" stroke="darkblue"/></svg>';
    // insert image before layer name into layer switcher
    l.labelSpan.parentNode.insertBefore(b,l.labelSpan);
}