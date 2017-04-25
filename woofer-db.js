// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCAP4qb_BQU-au-L-EWvgkRKjBFQZeUBeQ',
  authDomain: 'stfirebaseproject-1b80f.firebaseapp.com',
  databaseURL: 'https://stfirebaseproject-1b80f.firebaseio.com',
  projectId: 'stfirebaseproject-1b80f',
  storageBucket: 'stfirebaseproject-1b80f.appspot.com',
  messagingSenderId: '1091529861350'
}
firebase.initializeApp(config)

// TODO Sign into the database anonymously
firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  // TODO create a new record in Firebase
firebase.database().ref('woofs').push(woof)
}
// READ from Firebase when woofs are added, changed, or removed
// Write a function for each 'on' method and call addWoofRow,
// updateWoofRow, and deleteWoofRow to update the page. Make
// sure to pass the right parameters (hint: these functions are
// defined in woofer-ui.js).

function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
  firebase.database().ref('woofs')
  .on('child_changed', function (snapshot) {
  updateWoofRow(snapshot.key, snapshot.val())
  })
  firebase.database().ref('woofs')
  .on('child_added', function (snapshot) {
    addWoofRow(snapshot.key, snapshot.val())
  })
  firebase.database().ref('woofs')
  .on('child_removed', function (snapshot) {
  deleteWoofRow (snapshot.key)
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
firebase.database().ref('woofs').child(woofKey).child('text'). set(woofText)
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
firebase.database().ref('woofs').remove()
}

// Load all of the data
readWoofsInDatabase()
