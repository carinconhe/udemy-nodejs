// FInd post edit form
let postEditForm = document.getElementById('postEditForm');
//add submit listener to post edit form
postEditForm.addEventListener('submit',function(event){
    //Find length of uploaded images
    let imageUpload = document.getElementById('imageUpload').files.length;
    //Find total number of existing images
    let existingImages = document.querySelectorAll('.imageDeleteCheckbox').length;
    //Find total number of petencial deletions
    let imgDeletions = document.querySelectorAll('.imageDeleteCheckbox:checked').length; 
    let newTotal = existingImages-imgDeletions+imageUpload
    //FIGURE OUT IF THE FORM CAN BE SUBMIT OR NOT
    if( newTotal > 4){
        event.preventDefault();
        let removalAmt  = newTotal-4
        alert(`You need to remove at least ${removalAmt} (more) image${removalAmt === 1 ?'':'s '}!`)
    }
});