window.onload = () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
//   ПЕРВЫЙ ПЕРСОНАЖ
    ctx.beginPath();        //ноги
    ctx.moveTo(355, 435);
    ctx.lineTo(355, 472);
    ctx.lineTo(540, 472);
    ctx.lineTo(540, 435);
    ctx.strokeStyle = 'RoyalBlue';
    ctx.fillStyle = 'RoyalBlue';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //обувь
    ctx.moveTo(345, 476);
    ctx.bezierCurveTo(380, 463, 410, 462, 440, 472);
    ctx.bezierCurveTo(475, 463, 510, 463, 554, 477);
    ctx.closePath();
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'Black';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();            //тело
    ctx.moveTo(358, 310);
    ctx.bezierCurveTo(330, 340, 320, 370, 315, 400);
    ctx.lineTo(358, 400);
    ctx.lineTo(345, 430);
    ctx.bezierCurveTo(400, 460, 490, 460, 550, 430);
    ctx.lineTo(537, 400);
    ctx.lineTo(577, 400);
    ctx.bezierCurveTo(575, 370, 565, 340, 540, 310);
    ctx.strokeStyle = 'IndianRed';
    ctx.fillStyle = 'IndianRed';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //левая красная рука(больший шар)
    ctx.lineWidth = 0.2;
    ctx.arc(334, 402, 23, 0, 2 * Math.PI);
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'Red';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //левая красная рука(меньший шар)
    ctx.lineWidth = 0.5;
    ctx.arc(353, 397, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //правая красная рука(больший шар)
    ctx.lineWidth = 0.2;
    ctx.arc(559, 402, 23, 0, 2 * Math.PI);
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'Red';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //правая красная рука(меньший шар)
    ctx.lineWidth = 0.5;
    ctx.arc(540, 397, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //темные полосы у левой руки
    ctx.moveTo(353, 387);
    ctx.lineTo(361, 365);
    ctx.lineTo(355, 387);
    ctx.fillStyle = 'Black';
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //темные полосы у правой руки
    ctx.moveTo(539, 387);
    ctx.lineTo(532, 365);
    ctx.lineTo(537, 387);
    ctx.fillStyle = 'Black';
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //темная полоска куртки
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'Black';
    ctx.moveTo(452, 348);
    ctx.lineTo(447, 453);
    ctx.stroke();

    ctx.beginPath();        //пуговки
    ctx.arc(438, 374, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(435, 404, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(433, 433, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //шарф левый
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'Red';
    ctx.moveTo(362, 312);
    ctx.bezierCurveTo(377, 350, 450, 370, 450, 357);
    ctx.bezierCurveTo(447, 353, 444, 330, 420, 320);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //шарф правый
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'Red';
    ctx.moveTo(542, 320);
    ctx.bezierCurveTo(527, 350, 454, 370, 451, 357);
    ctx.bezierCurveTo(440, 345, 540, 300, 542, 320);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();            //Очертание кожи
    ctx.arc(450, 218, 130, -0.2, 3.3);
    ctx.strokeStyle = 'BlanchedAlmond';
    ctx.fillStyle = 'BlanchedAlmond';
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(320, 200);
    ctx.bezierCurveTo(340, 164, 560, 164, 580, 200);
    ctx.closePath();
    ctx.strokeStyle = 'BlanchedAlmond';
    ctx.fillStyle = 'BlanchedAlmond';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();            //шапка (голубая)
    ctx.moveTo(322, 173);
    ctx.bezierCurveTo(360, 50, 530, 50, 577, 173);
    ctx.strokeStyle = 'RoyalBlue';
    ctx.fillStyle = 'RoyalBlue';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //красная основа шапки
    ctx.moveTo(315, 200);
    ctx.bezierCurveTo(400, 164, 490, 164, 584, 195);
    ctx.lineTo(584, 170);
    ctx.bezierCurveTo(490, 139, 400, 139, 315, 175);
    ctx.closePath();
    ctx.strokeStyle = 'Red';
    ctx.fillStyle = 'Red';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();    //левый глаз
    ctx.lineWidth = 0.1;
    ctx.ellipse(410, 216, 35, 45, Math.PI / 4, 0, 2 * Math.PI);
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'White';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();     //правый глаз
    ctx.lineWidth = 0.1;
    ctx.ellipse(490, 216, 45, 35, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();    //левый зрачок
    ctx.arc(425, 213, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'Black';
    ctx.fill();
    ctx.stroke();  

    ctx.beginPath();    //правый зрачок
    ctx.arc(470, 213, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'Black';
    ctx.fill();
    ctx.stroke();  

    ctx.beginPath();    //рот
    ctx.moveTo(417, 290);
    ctx.lineTo(418, 292);
    ctx.lineTo(424, 298);
    ctx.lineTo(457, 320);
    ctx.lineTo(460, 320);
    ctx.lineTo(470, 310);
    ctx.lineTo(473, 308);
    ctx.lineTo(488, 289);
    ctx.closePath();
    ctx.lineWidth = 0.5;
    ctx.fill();
    ctx.stroke();  

    ctx.beginPath();    //зубы
    ctx.moveTo(423, 291);
    ctx.lineTo(425, 296);
    ctx.lineTo(429, 299);
    ctx.lineTo(437, 299);
    ctx.lineTo(438, 291);
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = 'White';
    ctx.fillStyle = 'White';
    ctx.fill();
    ctx.stroke();  

    ctx.beginPath();
    ctx.moveTo(441, 291);
    ctx.lineTo(439, 296);
    ctx.lineTo(439, 299);
    ctx.lineTo(452, 299);
    ctx.lineTo(452, 290);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(453, 290);
    ctx.lineTo(453, 300);
    ctx.lineTo(467, 300);
    ctx.lineTo(471, 290);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(473, 290);
    ctx.lineTo(469, 299);
    ctx.lineTo(477, 299);
    ctx.lineTo(484, 292);
    ctx.lineTo(482, 290);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 

    ctx.beginPath();            //На шапке пушок
    ctx.strokeStyle = 'Red';
    ctx.fillStyle = 'Red';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    ctx.moveTo(425, 84);
    ctx.lineTo(455, 82);
    ctx.moveTo(425, 84);
    ctx.lineTo(395, 86);
    ctx.stroke();

    ctx.moveTo(425, 84);
    ctx.lineTo(454, 91);
    ctx.moveTo(425, 84);
    ctx.lineTo(396, 77);
    ctx.stroke();

    ctx.moveTo(425, 84);
    ctx.lineTo(449, 99);
    ctx.moveTo(425, 84);
    ctx.lineTo(401, 68);
    ctx.stroke();
    
    ctx.moveTo(425, 84);
    ctx.lineTo(439, 107);
    ctx.moveTo(425, 84);
    ctx.lineTo(411, 60);
    ctx.stroke();

    ctx.moveTo(425, 84);
    ctx.lineTo(425, 111);
    ctx.moveTo(425, 84);
    ctx.lineTo(425, 57);
    ctx.stroke();

    ctx.moveTo(425, 84);
    ctx.lineTo(413, 109);
    ctx.moveTo(425, 84);
    ctx.lineTo(437, 58);
    ctx.stroke();

    ctx.moveTo(425, 84);
    ctx.lineTo(405, 104);
    ctx.moveTo(425, 84);
    ctx.lineTo(447, 63);
    ctx.stroke();

    ctx.moveTo(425, 84);
    ctx.lineTo(452, 72);
    ctx.moveTo(425, 84);
    ctx.lineTo(398, 96);
    ctx.stroke();

    ctx.beginPath();        //брови
    ctx.moveTo(355, 190);
    ctx.lineTo(385, 160);
    ctx.moveTo(540, 190);
    ctx.lineTo(510, 160);
    ctx.strokeStyle = 'Black';
    ctx.stroke();


    //   ВТОРОЙ ПЕРСОНАЖ
    ctx.beginPath();        //ноги
    ctx.moveTo(755, 435);
    ctx.lineTo(755, 472);
    ctx.lineTo(940, 472);
    ctx.lineTo(940, 435);
    ctx.strokeStyle = 'Teal';
    ctx.fillStyle = 'Teal';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //обувь
    ctx.lineWidth = 1;
    ctx.moveTo(745, 476);
    ctx.lineTo(765, 472);
    ctx.lineTo(850, 467);
    ctx.lineTo(960, 475);
    ctx.lineTo(960, 477);
    ctx.lineTo(745, 477);
    ctx.closePath();
    ctx.strokeStyle = 'DimGrey';
    ctx.fillStyle = 'DimGrey';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();            //тело
    ctx.moveTo(758, 310);
    ctx.bezierCurveTo(730, 340, 720, 370, 715, 400);
    ctx.lineTo(758, 400);
    ctx.lineTo(745, 430);
    ctx.bezierCurveTo(800, 460, 890, 460, 950, 430);
    ctx.lineTo(937, 400);
    ctx.lineTo(977, 400);
    ctx.bezierCurveTo(975, 370, 965, 340, 940, 310);
    ctx.strokeStyle = 'DarkOrange';
    ctx.fillStyle = 'DarkOrange';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();            //левый карман на куртке
    ctx.strokeStyle = 'Black';
    ctx.moveTo(790, 415);
    ctx.lineTo(825, 415);
    ctx.lineTo(825, 375);
    ctx.lineTo(790, 375);
    ctx.lineTo(790, 415);
    ctx.moveTo(790, 375);
    ctx.lineTo(808, 390);
    ctx.lineTo(825, 375);
    ctx.stroke();

    ctx.beginPath();            //правый карман на куртке
    ctx.strokeStyle = 'Black';
    ctx.moveTo(870, 415);
    ctx.lineTo(905, 415);
    ctx.lineTo(905, 375);
    ctx.lineTo(870, 375);
    ctx.lineTo(870, 415);
    ctx.moveTo(870, 375);
    ctx.lineTo(888, 390);
    ctx.lineTo(905, 375);
    ctx.stroke();

    ctx.beginPath();        //левая красная рука(больший шар)
    ctx.lineWidth = 0.2;
    ctx.arc(734, 402, 23, 0, 2 * Math.PI);
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'LimeGreen';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //левая красная рука(меньший шар)
    ctx.lineWidth = 0.5;
    ctx.arc(753, 397, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //правая красная рука(больший шар)
    ctx.lineWidth = 0.2;
    ctx.arc(959, 402, 23, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //правая красная рука(меньший шар)
    ctx.lineWidth = 0.5;
    ctx.arc(940, 397, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //темные полосы у левой руки
    ctx.moveTo(753, 387);
    ctx.lineTo(761, 365);
    ctx.lineTo(755, 387);
    ctx.fillStyle = 'Black';
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //темные полосы у правой руки
    ctx.moveTo(939, 387);
    ctx.lineTo(932, 365);
    ctx.lineTo(937, 387);
    ctx.fillStyle = 'Black';
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //темная полоска куртки
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'Black';
    ctx.moveTo(852, 348);
    ctx.lineTo(847, 453);
    ctx.stroke();

    ctx.beginPath();        //шарф левый
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'LimeGreen';
    ctx.moveTo(762, 312);
    ctx.bezierCurveTo(777, 350, 850, 370, 855, 347);
    ctx.bezierCurveTo(847, 353, 844, 330, 820, 320);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //шарф правый
    ctx.lineWidth = 0.3;
    ctx.moveTo(942, 320);
    ctx.bezierCurveTo(927, 350, 854, 370, 851, 347);
    ctx.bezierCurveTo(840, 345, 940, 300, 942, 320);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();            //Очертание кожи
    ctx.arc(850, 218, 130, -0.2, 3.3);
    ctx.strokeStyle = 'BlanchedAlmond';
    ctx.fillStyle = 'BlanchedAlmond';
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(720, 200);
    ctx.bezierCurveTo(740, 164, 960, 164, 980, 200);
    ctx.closePath();
    ctx.strokeStyle = 'BlanchedAlmond';
    ctx.fillStyle = 'BlanchedAlmond';
    ctx.fill();
    ctx.stroke();

    
    ctx.beginPath();    //левый глаз
    ctx.lineWidth = 0.1;
    ctx.ellipse(810, 216, 35, 45, Math.PI / 4, 0, 2 * Math.PI);
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'White';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();     //правый глаз
    ctx.lineWidth = 0.1;
    ctx.ellipse(890, 216, 45, 35, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();    //левый зрачок
    ctx.arc(825, 213, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'Black';
    ctx.fill();
    ctx.stroke();  

    ctx.beginPath();    //правый зрачок
    ctx.arc(870, 213, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'Black';
    ctx.fill();
    ctx.stroke();  

    ctx.beginPath();    //рот
    ctx.moveTo(817, 290);
    ctx.lineTo(818, 292);
    ctx.lineTo(824, 298);
    ctx.lineTo(857, 320);
    ctx.lineTo(860, 320);
    ctx.lineTo(870, 310);
    ctx.lineTo(873, 308);
    ctx.lineTo(888, 289);
    ctx.closePath();
    ctx.lineWidth = 0.5;
    ctx.fill();
    ctx.stroke();  

    ctx.beginPath();    //зубы
    ctx.moveTo(823, 291);
    ctx.lineTo(825, 296);
    ctx.lineTo(829, 299);
    ctx.lineTo(837, 299);
    ctx.lineTo(838, 291);
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = 'White';
    ctx.fillStyle = 'White';
    ctx.fill();
    ctx.stroke();  

    ctx.beginPath();
    ctx.moveTo(841, 291);
    ctx.lineTo(839, 296);
    ctx.lineTo(839, 299);
    ctx.lineTo(852, 299);
    ctx.lineTo(852, 290);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(853, 290);
    ctx.lineTo(853, 300);
    ctx.lineTo(867, 300);
    ctx.lineTo(871, 290);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(873, 290);
    ctx.lineTo(869, 299);
    ctx.lineTo(877, 299);
    ctx.lineTo(884, 292);
    ctx.lineTo(882, 290);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 

    ctx.beginPath();        //уши шапки
    ctx.ellipse(720, 210, 20, 53, Math.PI / 7, 0, 2 * Math.PI);
    ctx.strokeStyle = 'LimeGreen';
    ctx.fillStyle = 'LimeGreen';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //шапка
    ctx.ellipse(980, 210, 20, 53, Math.PI / -7, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(725, 169);
    ctx.lineTo(725, 90);
    ctx.bezierCurveTo(728, 60, 745, 60, 755, 60);
    ctx.lineTo(945, 60);
    ctx.bezierCurveTo(955, 60, 972, 60, 975, 90);
    ctx.lineTo(975, 169);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(740, 185);
    ctx.bezierCurveTo(810, 165, 890, 165, 960, 185);
    ctx.lineTo(960, 115);
    ctx.lineTo(740, 115);
    ctx.strokeStyle = 'SeaGreen';
    ctx.fillStyle = 'SeaGreen';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();        //линии шапки
    ctx.moveTo(725, 169);
    ctx.lineTo(735, 161);
    ctx.lineTo(740, 161);
    ctx.moveTo(975, 169);
    ctx.lineTo(965, 161);
    ctx.lineTo(960, 161);
    ctx.strokeStyle = 'Black';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    ctx.beginPath();        //брови
    ctx.lineWidth = 5;
    ctx.moveTo(755, 190);
    ctx.lineTo(785, 160);
    ctx.moveTo(940, 190);
    ctx.lineTo(910, 160);
    ctx.strokeStyle = 'Black';
    ctx.stroke();
}