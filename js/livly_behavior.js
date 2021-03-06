Vue.component('livly_charactor',{
    template: `
            <div ref="chara" class="livly midium1" v-bind:class="[direct_chara ? left_direct : right_direct, hover_toggle ? 'render_back' : 'render_front' ]" v-bind:style="{left: pleft, top: ptop}">
                <div class="frames midium1">
                    <iframe id="standing" v-bind:class="{'none': none0}" class="midium1" :src="renderstanding" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    <iframe id="walking" v-bind:class="{'none': none1}" class="midium1" :src="renderwalking" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    <iframe id="gripped" v-bind:class="{'none': none2}" class="midium1" :src="rendergripped" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    <iframe id="sleeping" v-bind:class="{'none': none3}" class="midium1" :src="rendersleeping" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    <iframe id="eating" v-bind:class="{'none': none4}" class="midium1" :src="rendereating" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    <iframe id="died" v-bind:class="{'none': none5}" class="midium1" :src="renderdied" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    <iframe id="damaging" v-bind:class="{'none': none6}" class="midium1" :src="renderdamaging" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    <iframe id="pokeing" v-bind:class="{'none': none7}" class="midium1" :src="renderpokeing" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    <div class="comments"></div>
                    <div class="grip midium1" v-bind:class="hover_toggle ? hover_touch : hover_grip" @mousemove="gripping" @mousedown ="gripped" @mouseup ="grippup" @mouseout="gripout" ></div>
                </div>
                <div class="effects"></div>
            </div>
            `,
    props: {
        renderstanding: {
            type: String,
            default: '',
        },
        renderwalking: {
            type: String,
            default: '',
        },
        rendergripped: {
            type: String,
            default: '',
        },
        rendersleeping: {
            type: String,
            default: '',
        },
        rendereating: {
            type: String,
            default: '',
        },
        renderdied: {
            type: String,
            default: '',
        },
        renderdamaging: {
            type: String,
            default: '',
        },
        renderpokeing: {
            type: String,
            default: '',
        },
        //???????????????????????????
        cursor:{
            type: Number,
            default: 0,
        },
        //??????????????????
        givefood:{
            type: Number,
            default: 0,
        }
    },
    data:() => {
        return{
            clicked: false,//???????????????????????????????????????
            state: 0, //????????????????????????(0:????????????,1:??????,2:????????????,3:??????,4:?????????,5:??????,6:???????????????)
            arrived: 2, //(0:?????????,1:?????????,2:????????????)

            nowX: 0,//??????????????????
            nowY: 0,

            aimX: 0,//??????????????????
            aimY: 0,

            calcX: 0,//?????????(??????????????????)
            calcY: 0,

            idletime: 150,//????????????(?????????)?????????

            process_time: 0,//(?????????????????????)????????????

            //???????????????????????????bool???
            none0: false,
            none1: true,
            none2: true,
            none3: true,
            none4: true,
            none5: true,
            none6: true,
            none7: true,

            //????????????????????????????????????????????????????????????????????????????????????????????????
            charactorObje: null,

            //??????????????????????????????????????????toggle
            direct_chara: false,
            left_direct: 'svg-left',
            right_direct: 'svg-right',

            //?????????style??????
            pleft: '0px',
            ptop:  '0px',

            //??????????????????
            shiftX: 0,
            shiftY: 0,

            //?????????????????????Toggle
            hover_toggle: true,
            hover_touch: 'hover_touch',
            hover_grip: 'hover_grip',

            //HP
            HP: 100,

        }
    },
    mounted(){
        //???????????????????????????Dom?????????
        this.charactor_posi = this.$refs.chara;

        this.set_position();
        //console.log(this.pleft);

        //???????????????????????????????????????(???????????????????????????addEventListner)
        window.addEventListener('load', ()=>{
            this.loop_action();
            //console.log(this.pleft);
        });

    },
    //?????????????????????????????????????????????????????????????????????????????????
    methods: {
        //???????????????????????????????????????
        render_charactor: function() {
            switch(this.state){
                case 0:
                    this.none0 = false;
                    this.none1 = true;
                    this.none2 = true;
                    this.none3 = true;
                    this.none4 = true;
                    this.none5 = true;
                    this.none6 = true;
                    this.none7 = true;
                    break;
                case 1:
                    this.none0 = true;
                    this.none1 = false;
                    this.none2 = true;
                    this.none3 = true;
                    this.none4 = true;
                    this.none5 = true;
                    this.none6 = true;
                    this.none7 = true;
                    break;
                case 2:
                    this.none0 = true;
                    this.none1 = true;
                    this.none2 = false;
                    this.none3 = true;
                    this.none4 = true;
                    this.none5 = true;
                    this.none6 = true;
                    this.none7 = true;
                    break;
                case 3:
                    this.none0 = true;
                    this.none1 = true;
                    this.none2 = true;
                    this.none3 = false;
                    this.none4 = true;
                    this.none5 = true;
                    this.none6 = true;
                    this.none7 = true;
                    break;
                case 4:
                    this.none0 = true;
                    this.none1 = true;
                    this.none2 = true;
                    this.none3 = true;
                    this.none4 = false;
                    this.none5 = true;
                    this.none6 = true;
                    this.none7 = true;
                    break;
                case 5:
                    this.none0 = true;
                    this.none1 = true;
                    this.none2 = true;
                    this.none3 = true;
                    this.none4 = true;
                    this.none5 = false;
                    this.none6 = true;
                    this.none7 = true;
                    break;
                case 6:
                    this.none0 = true;
                    this.none1 = true;
                    this.none2 = true;
                    this.none3 = true;
                    this.none4 = true;
                    this.none5 = true;
                    this.none6 = false;
                    this.none7 = true;
                    break;
                case 7:
                    this.none0 = true;
                    this.none1 = true;
                    this.none2 = true;
                    this.none3 = true;
                    this.none4 = true;
                    this.none5 = true;
                    this.none6 = true;
                    this.none7 = false;
                    break;
                default:
                    break;
            }
            //console.log(this.pleft, this.ptop);
        },

        //?????????????????????????????????????????????
        set_position(){
            const rand_posi = this.random_position();
            this.pleft = rand_posi[0] + 'px';
            this.ptop = rand_posi[1] + 'px';

        },
        //???????????????????????????????????????????????????
        random_position(){
            //const maxY= parseInt(this.charactor_posi.getBoundingClientRect().height + 100);
            //const maxX = parseInt(this.charactor_posi.getBoundingClientRect().width + 100);
            //const min = 0;
            let maxX = 0;
            let maxY = 0;
            let minX = 0;
            let minY = 0;
            if(window.innerWidth> 900){
                maxX = Math.round((window.innerWidth -900)/2) + 290;
                minX = Math.round((window.innerWidth -900)/2);
            }else{
                maxX = 300;
                minX = 0;
            }

            maxY = 546;
            minY = 286;
            
            let randomx = Math.floor( Math.random() * (maxX - minX + 1)) + minX;
            let randomy = Math.floor( Math.random() * (maxY - minY + 1)) + minY;

            //console.log(maxX, minX, maxY, minY);
            return [randomx, randomy];
        },
        //???????????????????????????????????????????????????????????????????????????????????????
        action_charactor: function(){
            if(!this.clicked){
                //????????????????????????????????????????????????(state!=5)
                if(this.state != 5) {
                    //?????????
                    if(this.arrived == 0){
                        this.process_time = 0;
                        let random = this.random_position();
                        this.aimX = random[0];
                        this.aimY = random[1];

                        this.nowX = parseInt(this.pleft);
                        this.nowY = parseInt(this.ptop);
                        //console.log(this.nowX, this.nowY);
                        //svg?????????????????????
                        let diff_x = this.nowX-this.aimX;
                        if(diff_x<0){
                            this.direct_chara = false;
                        }else{
                            this.direct_chara = true;
                        }
                        //console.log(this.direct_chara);

                        this.state = 1;
                        this.arrived = 1;

                        this.$nextTick(() => {
                            this.render_charactor();
                        })
                    //?????????
                    }else if(this.arrived == 1){
                        this.process_time -= 2;

                        let output = this.calc(this.nowX, this.nowY, this.aimX, this.aimY, this.process_time);

                        this.calcX = parseInt(output[1][0]);
                        this.calcY = parseInt(output[1][1]);

                        this.pleft = this.calcX +'px';
                        this.ptop = this.calcY+ 'px';

                        //console.log(this.pleft, this.ptop);
                        this.eating_action();

                        //??????????????????????????????
                        if(this.aimX == this.calcX){
                            this.arrived = 2;
                            this.process_time = 0;

                            this.pleft = parseInt(output[1][0]) +'px';
                            this.ptop = parseInt(output[1][1])+ 'px';

                            //20%????????????80%?????????????????????????????????
                            let whichstate = Math.floor(Math.random() * 100);
                            if(whichstate < 20){
                                this.state = 3;
                                //????????????????????????????????????
                                const myArray = [700, 1100, 2000];
                                let rand = Math.floor(Math.random()*myArray.length);
                                this.idletime = myArray[rand];
                            }else{
                                this.state = 0;
                                //??????????????????????????????????????????
                                const myArray = [80, 150, 250];
                                let rand = Math.floor(Math.random()*myArray.length);
                                this.idletime = myArray[rand];
                            }

                            this.$nextTick(() => {
                                this.render_charactor();
                            })
                        }
                    //?????????????????????????????????????????????????????????
                    }else{
                        if(this.process_time > this.idletime){
                            //HP???0????????????????????????
                            if(this.HP > 0){
                                this.$nextTick(() => {
                                    this.render_charactor();
                                })
                                this.arrived = 0;

                            }else{
                                this.loop_die();

                                this.$nextTick(() => {
                                    this.render_charactor();
                                })
                            }
                        }else{
                            this.process_time += 1;

                            this.eating_action();
                            //console.log(this.process_time);
                        }
                    }    
                }
            }else{

            }
        },
        //??????????????????????????????????????????
        loop_action: function(){
            let self = this;
            this.charactorObje = setInterval(function(){self.action_charactor()}, 20);
        },
        //???????????????????????????????????????????????????????????????
        eating_action: function(){
            if(this.givefood != 0){
                    this.state = 4;
                    this.arrived = 2;
                    this.idletime = 300;
                    this.process_time = 0;
                }

                this.render_charactor();
            //console.log(this.nowfood, this.pastfood);
        },
        //??????????????????????????????????????????????????????????????????(???????????????)??????
        loop_die: function(){
            clearInterval(this.charactorObje);
            this.state = 5;
            this.render_charactor();
        },
        //????????????????????????any[1][0,1]?????????????????????
        calc: function(fx, fy, tx, ty, move){
            fx = parseFloat(fx);
            fy = parseFloat(fy);
            tx = parseFloat(tx);
            ty = parseFloat(ty);
            move = parseFloat(move);
            if(isNaN(fx) || isNaN(fy) || isNaN(tx) || isNaN(ty) || isNaN(move)){
                return [[0, 0],[101, 102],[0, 0]];
            }
            move = Math.abs(move);
            let dx = tx - fx;
            let dy = ty - fy;
            let length = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if(length == 0) return [[0, 0],[0, 0],[0, 0]];
            let per = move / length;
            if(per == 0) return [[0, 0],[102, 100],[0, 0]];
            let mx = dx * per;
            //if(mx == 0) return [[0, 0],[103, 100],[0, 0]];
            let my = dy * per;
            //if(my == 0) return [[0, 0],[104, 100],[0, 0]];
            let ary = [];
            let cx = fx;
            let cy = fy;
            while(true){
                if((dx > 0 && cx > tx) || (dx < 0 && cx < tx)){
                    cx = tx;
                }
                if((dy > 0 && cy > ty) || (dy < 0 && cy < ty)){
                    cy = ty;
                }
                ary.push([cx, cy]);
                if(cx == tx && cy == ty) break;
                cx += mx;
                cy += my;
            }
            //onsole.log(ary[[0][0]],ary[[0][1]],ary[[1][0]],ary[[1][1]],ary[[2][0]],ary[[2][1]]);
            return ary;
        },

        //???????????????????????????????????????
        gripped: function(event){
            //????????????????????????
            if(this.state != 5){
                if(this.cursor == 0){
                    this.clicked =true;
                    this.state = 2;
                }else if(this.cursor == 1){
                    //???????????????????????????
                    this.state = 7;
                    this.arrived = 2;
                    this.idletime = 100;
                    this.process_time = 0;
                }else{
                    this.clicked = false;
                    this.state = 6;
                    this.arrived = 2;
                    this.idletime = 30;
                    this.process_time = 0;

                    if(this.HP >= 0){
                        this.HP --;
                    }
                }
            }else{
                this.clicked =true;
            }

            this.shiftX = event.clientX - this.charactor_posi.getBoundingClientRect().left;
            this.shiftY = event.clientY - this.charactor_posi.getBoundingClientRect().top;

            this.render_charactor();

            this.centering(event.pageX, event.pageY);
            this.hover_toggle = false;
        },
        //????????????????????????????????????????????????
        gripping: function(event){
            if(this.clicked){
                this.centering(event.pageX, event.pageY);

            }
        },
        //????????????????????????????????????????????????????????????
        centering(pageX, pageY){
            this.pleft = pageX - this.shiftX + 'px';
            this.ptop = pageY - this.shiftY + 'px';
            //console.log(this.pleft, this.ptop);
            //???????????????????????????
            if(window.innerWidth > 900){
                if(parseInt(this.pleft) > (Math.round((window.innerWidth - 900)/2)+290)){
                    this.pleft = (Math.round((window.innerWidth - 900)/2)+290) + 'px';
                }else if(parseInt(this.pleft) < Math.round((window.innerWidth - 900)/2)){
                    this.pleft = Math.round((window.innerWidth - 1000)/2) + 'px';
                }
            }else{
                if(parseInt(this.pleft) > 300){
                    this.pleft = 300 + 'px';
                }else if(parseInt(this.pleft) <0){
                    this.pleft = 0 + 'px';
                }
            }

            if(parseInt(this.ptop) > 546){
                this.ptop = '546px';
            }else if(parseInt(this.ptop) < 246){
                this.ptop = '246px';
            }
        },
        //???????????????????????????????????????????????????
        grippup: function(){
            this.clicked =false;
            
            if(this.cursor == 0 && this.state != 5){
                this.state = 0;
            }
            if(this.state != 5){
                this.arrived = 2;
            }

            this.render_charactor();

            this.hover_toggle = true;
            //console.log(this.cursor);
        },
        gripout: function(){
            this.clicked =false;
        },
    },
    //??????????????????(??????????????????????????????)????????????????????????????????????????????????????????????

});