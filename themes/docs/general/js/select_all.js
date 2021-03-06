// Functions for selecting all checkboxes in folder_contents/search_form view
function toggleSelect(selectbutton, id, initialState, formName) {
    /* required selectbutton: you can pass any object that will function as a toggle
     * optional id: id of the the group of checkboxes that needs to be toggled (default=ids:list
     * optional initialState: initial state of the group. (default=false)
     * e.g. folder_contents is false, search_form=true because the item boxes
     * are checked initially.
     * optional formName: name of the form in which the boxes reside, use this if there are more
     * forms on the page with boxes with the same name
     */
    id=id || 'ids:list'  // defaults to ids:list, this is the most common usage
    var state = selectbutton.isSelected;
    state = state == null ? Boolean(initialState) : state;

    // create and use a property on the button itself so you don't have to 
    // use a global variable and we can have as much groups on a page as we like.
    selectbutton.isSelected = !state;
    jq(selectbutton).attr('src', portal_url+'/select_'+(state?'all':'none')+'_icon.gif');
    var base = formName ? jq(document.forms[formName]) : jq(document);
    base.find(':checkbox[name=' + id + ']').attr('checked', !state);
}
