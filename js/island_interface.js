
//インターフェスコンポーネントの宣言
Vue.component('islandinterface',{
    template: `
            <div>
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="d-flex rounded-pill m-1" style="background-color:#ffb6c1; width: 180px;">
                            <span class="ps-2 pe-2 text-light fw-bold border border-danger border-3" style="background-color:#b22222;">ステキ</span>
                            <span class="ps-2 pe-2" style="color:#ffff00; padding-top: 1.8px;"><i class="fa-solid fa-crown"></i></span>
                            <span class="text-end fw-bold ms-auto pe-2" style="color:#dc143c; padding-top: 1.8px;">1769</span>
                        </div>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="bg-light p-2">
                    <div class="d-flex flex-wrap justify-content-center fw-bold">
                        <div @click="menuchange('A')" v-bind:class="{'menuactive': idmenuActive == 'A', 'menudeactive': idmenuActive != 'A'}" class="ps-3 pe-3">おせわ</div>
                        <div class="pe-3 text-unuse">もようがえ</div>
                        <div class="pe-3 text-unuse">さんぽ</div>
                        <div class="pe-3 text-unuse">わざ</div>
                        <div @click="menuchange('B')" v-bind:class="{'menuactive': idmenuActive == 'B', 'menudeactive': idmenuActive != 'B'}" class="pe-3">せってい</div>
                        <div @click="menuchange('C')" v-bind:class="{'menuactive': idmenuActive == 'C', 'menudeactive': idmenuActive != 'C'}"  class="pe-3">INFO</div>
                    </div>
                    <div class="p-2 pt-3 m-1 rounded-pill" style="background-color:#FFF;"></div>
                    <div v-if="idmenuActive == 'A'" style="background-color:#FFF;">
                        <div class="d-flex flex-wrap m-2">
                            <div @click="change('A')" v-bind:class="{'active': isActive == 'A', 'deactive': isActive != 'A'}" class="pointer m-2 fs-4 p-1 ps-3 pe-3 border border-4">   
                                <i class="fa-solid fa-utensils text-light"></i>
                            </div>
                            <div @click="change('B')" v-bind:class="{'active': isActive == 'B', 'deactive': isActive != 'B'}" class="pointer m-2 fs-4 p-1 ps-3 pe-3 border border-4" >   
                                <i class="fa-solid fa-hand text-light"></i>
                            </div>
                            <div @click="change('C')" v-bind:class="{'active': isActive == 'C', 'deactive': isActive != 'C'}" class="pointer m-2 fs-4 p-1 ps-3 pe-3 border border-4">   
                                <i class="fa-solid fa-heart text-light"></i>
                            </div>
                            <div class="m-2 fs-4 p-1 ps-3 pe-3 border border-4" style="background-color: #AAAAAA;">   
                                <i class="fa-solid fa-toilet text-light"></i>
                            </div>
                        </div>
                        <div class="m-2" style="background-color: #BBBBBB">
                            <div  class="border border-5" style="background-color:#FFF">
                                <div v-if="isActive == 'A'" style="min-height:405px;">
                                    <div class="d-flex justify-content-center">
                                        <div class="flex-fill text-center">一般</div>
                                        <div class="flex-fill text-center text-light" style="background-color: #AAAAAA;">G.L.L</div>
                                        <div class="flex-fill text-center text-light" style="background-color: #AAAAAA;">ヤミー</div>
                                        <div class="flex-fill text-center text-light" style="background-color: #AAAAAA;">その他</div>
                                    </div>
                                    <div class="" style="padding-left:30px; padding-right: 30px; padding-top: 20px;">
                                        <div class="d-flex flex-wrap justify-content-center">
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div @mousedown="foodselect('1')" @mouseup="foodstopEmit()" v-on:mouseover="foodchose('テントウムシ、リヴリーが少し赤色に近づく餌。')" v-on:mouseleave="fooddechose()" class="p-1 pointer" style="position:relative; height:60px; width:60px">
                                                    <img src="src/insects/r.png" width="35px" style="position:absolute; left:10px; top:15px;">                                                       
                                                </div>
                                            </div>
                                            <div @mousedown="foodselect('2')" @mouseup="foodstopEmit()" v-on:mouseover="foodchose('オンブバッタ、リヴリーが少し緑色に近づく餌。')" v-on:mouseleave="fooddechose()" class="border border-2 m-2 pointer" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">
                                                    <img src="src/insects/g.png" width="60px" style="position:absolute; top:11px; right:2px;">                                                       
                                                </div>
                                            </div>
                                            <div @mousedown="foodselect('3')" @mouseup="foodstopEmit()" v-on:mouseover="foodchose('ルリセンチコガネ、リヴリーが少し青色に近づく餌。')" v-on:mouseleave="fooddechose()" class="border border-2 m-2 pointer" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">
                                                    <img src="src/insects/b.png" width="40px" style="position:absolute; top:13px; left:10px;">                                                       
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                            <div class="border border-2 m-2" style="background-color:#ffffe0;">
                                                <div class="p-1" style="position:relative; height:60px; width:60px">                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-2 border-top border-3" style="height: 80px;">
                                            <p>{{fooddetails}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="isActive == 'B'" style="min-height:405px;">
                                    <div class="row justify-content-center">
                                        <div @click="skinship('0')" v-bind:class="{'skinshipactive': touch == '0', 'skinshipdeactive': touch != '0'}"  class="d-flex mt-4 border border-5" style="width:300px;">
                                            <i class="p-2 fs-1 fa-solid fa-hand"></i>
                                            <p class="pt-3 ps-4">リヴリーにさわる</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div @click="skinship('1')" v-bind:class="{'skinshipactive': touch == '1', 'skinshipdeactive': touch != '1'}" class="d-flex mt-4 border border-5" style="width:300px;">
                                            <i class="p-2 fs-1 fa-solid fa-hand-lizard"></i>
                                            <p class="pt-3 ps-4">リヴリーをつつく</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div @click="skinship('2')" v-bind:class="{'skinshipactive': touch == '2', 'skinshipdeactive': touch != '2'}" class="d-flex mt-4 border border-5" style="width:300px;">
                                            <i class="p-2 fs-1 fa-solid fa-hands"></i>
                                            <p class="pt-3 ps-4">リヴリーをおこす</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mt-2 border-top border-3" style="height: 80px; width:350px;">
                                            <p>手のひらカーソルでリヴリーをさわることができます<br>
                                                指先カーソルでリヴリーをつつくことができます<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="isActive == 'C'" style="min-height:380px;">
                                    <div class="m-4 border border-4 border-danger rounded">
                                        <div class="row">
                                            <div class="col">
                                                <object data="src/pigmys/00.html" class="m-1 border border-3 rounded" style="width:150px"></object>
                                            </div>
                                            <div class="col">
                                                <div class="pt-4" style="font-size:10px;">
                                                    名前/<br>
                                                    種名/ピグミー<br>
                                                    生年月日/2022.04.15<br>
                                                    レベル/ 5<br>
                                                    住島/アイランド<br>
                                                    チーム/<br>
                                                    飼い主/<br>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2 border-top border-3 p-2" style="height: 50px;">
                                            <p style="font-size:12px;">独自研究により再現されたリヴリーです</p>
                                        </div>
                                        <div class="border-top border-3 p-2" style="height: 130px;">
                                            <span class="text-danger" style="font-size:10px;">経験値:99100exp</span>
                                            <div class="d-flex">
                                                <div class="progress" style="height:0.3rem; width: 200px;">
                                                    <div class="progress-bar bg-danger" role="progressbar" style="width:5%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div class="ps-2 text-danger" style="font-size:10px;">5%</div>
                                            </div>
                                            <span class="text-warning" style="font-size:10px;">満腹度</span>
                                            <div class="d-flex">
                                                <div class="progress" style="height:0.3rem; width: 200px;">
                                                    <div class="progress-bar bg-warning" role="progressbar" style="width:50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div class="ps-2 text-warning" style="font-size:10px;">50%</div>
                                            </div>
                                            <span class="text-info" style="font-size:10px;">ストレス</span>
                                            <div class="d-flex">
                                                <div class="progress" style="height:0.3rem; width: 200px;">
                                                    <div class="progress-bar bg-info" role="progressbar" style="width:2%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div class="ps-2 text-info" style="font-size:10px;">2%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="idmenuActive == 'B'" style="background-color:#FFF; height:460px;">
                        <div>

                        </div>
                    </div>
                    <div v-else-if="idmenuActive == 'C'" style="background-color:#FFF; height:460px;">
                        <div class="row justify-content-center">
                            <div class="p-4">
                                このサイトは旧LivlyIslandの再現として作成されました。<br>
                                サイト構成技術にはHTML/CSS・JavaScript(Vue等)が用いられています。<br>
                                <br>
                                ソースコードは以下リンクから見ることができます。<br>
                                <a href="https://github.com/yuron3141/vue_livly_app">https://github.com/yuron3141/vue_livly_app</a>
                                <br>
                                <br>
                                <h4>・更新履歴</h4>
                                <ul>
                                    <li>2022/04/15 開発開始</li>
                                    <li>2022/04/23 ver 1.0.0 公開</li>
                                </ul>
                                <br>
                                <h4>・今後の更新予定</h4>
                                <ul>
                                    <li>チャット機能の追加</li>
                                    <li>トイレをする機能の追加</li>
                                    <li>餌による色変え機能の追加</li>
                                    <li>バイオレコードの各パラメータ同期</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    `,
    data:() => {
        return {
            isActive: 'A',
            idmenuActive: 'A',

            food: '0',
            fooddetails: '',
            foodhover: false,

            touch: '0',//0:通常触る,1:つつく,2:はたく
            touchhover: false,

        }
    },
    methods: {
        change: function(num){
            this.isActive = num;
        },
        menuchange: function(val){
            this.idmenuActive = val;
        },

        foodchose: function(detail){
            this.fooddetails = detail;
            this.foodhover = true
        },
        fooddechose: function(){
            this.foodhover = false
            this.fooddetails = '';
        },
        foodselect: function(val){
            this.food_state = val;
            this.foodEmit(val);
        },
        skinship: function(val){
            this.touch = val;
            this.execEmit(val);
        },
        //スキンシップ状態の親コンポーネントへのエミット
        execEmit: function (val){
            this.$emit('eventTest2', parseInt(val));
        },
        //食べ物(餌)状態の親コンポーネントへのエミット
        foodEmit: function(val){
            this.$emit('foodEvent', parseInt(val));
        },
        foodstopEmit: function(){
            this.$emit('foodEvent', 0);
        }
    }
});
