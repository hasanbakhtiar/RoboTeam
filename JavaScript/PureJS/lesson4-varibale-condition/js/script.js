// var $1i_nfonumb = 5;
// console.log($1i_nfonumb);

// var abstract = 5;
// abstract = 10;
// console.log(abstract);

// let a = 5;
// let a = 10;
// console.log(a);

// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// let      -> local
// const    -> local    ->      constant
// var      -> global   ->      variable

// global
// if (true) {
//     // local global

//     if (true) {
//         // local global

//         if (true) {
//             // local
//             // var a = 5;
//             // console.log(a);
//         }
//     }

// }

// if (true) {
//     // var a ="hello"
//     console.log(a);
// }

// var a = 5;
// a = 10;
// console.log(a);

// CONDITION

// if  - eger
// else - deyilse
// else if  - deyilse eger

// const a = 25;

// if (a == 4) {
//     console.log('this is four');
// }else if(a == 5){
//     console.log('this is five');
// }else if(a == 15){
//     console.log('this is 15');
// }else if(a == 25){
//     console.log('this is 25');
// }

// else{
//     console.log('this is wrong!');
// }

// const myTime = 7;

// if (myTime > 5 && myTime < 13) {
//   console.log("good morning");
//   if (myTime == 7) {
//             console.log('get up');
//   }else if(myTime == 9){
//         console.log('have a breakfast');
//   }
// } else if (myTime >= 13 && myTime < 18) {
//   console.log("good afternoon");
// } else if (myTime >= 18 && myTime <= 21) {
//   console.log("good evening");
// } else if (myTime >= 22 && myTime <= 23) {
//   console.log("good night");
// } else {
//   console.log("wrong time");
// }

// const age = 5;

// korpe - 0 - 3
// usaq - 3 - 15
// yeniyetme 16- 18
// genc 19-30
// orta yasli - 31 - 49
// qoca - 50 -79
// daha daha yasli 79+

// const info ="Hello";
// switch(info){
//     case 5:
//         console.log('this is five');
//     break;
//     case "Hello":
//         console.log("this is Hello");
//     break;
//     default:
//         console.log('this is deafult');
//     break;
// }

// let info = 5;

// if (info > 0 && info < 10) {
//     info = 7;
//   switch (info) {
//     case 7:
//         info = false;
//       if (!info) {
//         console.log("this is success");
//       }else{
//         console.log('this is true');
//       }
//       break;

//     default:
//       console.log("this is default");

//       break;
//   }
// } else {
//   console.log("this is wrong");
// }


/* employee  1h = 3$
*/

// const employeeTime = 5;

const productOne = ['bread','egg','milk'] // 0$ - 10$
const productTwo = ['milk','cheese','onion'] // 10$ - 20$
const productThree = ['little meat','milk','bread'] //20$ - 40$
const productFour = ['chicken','little meat','yogurt','fanta'] // 40$ - 70$
const productFive = ['more meat','cola','bread','egg','milk'] // 70$ - 100$


// if else hemde switch case
