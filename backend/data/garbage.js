// app.get('/insert', (req, res, next) => {
//     const orgObj = {
//         _id: '5d7b12c9-8153-47b8-969b-318d4b44304e',
//         organizationName: "STARK",
//         organizationPassword: "password",
//         organizationCode: 3000,
//     }
//     const orgObject = new Org(orgObj);
//     orgObject.save().then(()=>{
//         console.log("inserted");

//     }).catch((er)=>{
//         console.log(er);
//     })

//     res.status(200).json([
//         {
//             message: "invoked"
//         }
//     ]);
// });