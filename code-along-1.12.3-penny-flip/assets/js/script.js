// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        let headsCounts = 0
        let tailsCounts = 0 
document.getElementById("flip").addEventListener("click",function(){
    
    var isHeads = Math.random() < 0.5
    //console.log("Its heads",isHeads)
    if (isHeads) {
        headsCounts++
        document.querySelector(".pennyImage").src = "./assets/images/penny-heads.jpg"
        document.querySelector(".message-container").textContent = "You Flipped Heads"
    }
    else {
        tailsCounts++
        document.querySelector(".pennyImage").src = "./assets/images/penny-tails.jpg"
        document.querySelector(".message-container").textContent = "You Flipped Tails"
    }
  var totalCount = headsCounts + tailsCounts
  var percentHeads = Math.round((headsCounts / totalCount) * 100)
  //console.log (totalCount)
  //console.log (percentHeads)  
  var percentTails = Math.round((tailsCounts / totalCount) * 100) 
  document.querySelector ("#heads").textContent = headsCounts
  document.querySelector ("#heads-percent").textContent = percentHeads
  document.querySelector ("#tails").textContent = tailsCounts
  document.querySelector ("#tails-percent").textContent = percentTails

  
})
document.getElementById("clear").addEventListener("click",function(){
    headsCounts = 0
    tailsCounts = 0
    percentHeads = 0
    percentTails = 0


})
})