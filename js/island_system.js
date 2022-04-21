Vue.component('island-wrapper', {
    template: `
                <div class="container-field">
                    <div class="row">
                        <div class="d-flex">
                            <img src="./imgs/ui/kumo.png" alt="蜘蛛リンク" style="width:300px;">
                            <div class="mobile-none">
                                <img src="./imgs/ui/banner.jpg" alt="バナー" class="m-2 pt-3"style="width:auto; height:98px;">
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col">
                            <div class="m-1">
                                <h3>アイランド</h3>
                                <p>
                                    ミュラー博士が回収し忘れたリヴリーです<br>
                                    飼い主：<br>
                                    Livly:ピグミー
                                </p>
                            </div>
                            <div>                            
                                <div id="contain_contents" class="container_main">
                                    <!-- 島や背景アイテムの描画用レイヤー-->
                                    <div id="back_render" class="">
                                        <div id="background" class=""></div>
                                        <div id="island" class="island container_size"></div>
                                    </div>
                                    <!-- キャラクターや動的アイテムの描画用レイヤー-->
                                    <div id="dynamic_render">
                                        <div id="poops"></div>
                                        <div id="charactors">
                                            <div id="livly" style="display:block;">
                                                <livly_charactor :cursor="cursorstate" :givefood="foodstate" renderstanding="src/pigmys/00.html" renderwalking="src/pigmys/01.html" rendergripped="src/pigmys/02.html" rendersleeping="src/pigmys/03.html" rendereating="src/pigmys/04.html" renderdied="src/pigmys/05.html" renderdamaging="src/pigmys/06.html" renderpokeing="src/pigmys/07.html"></livly_charactor>
                                            </div>
                                        </div> 
                                        <div id="foods"></div>
                                    </div>
                                    <!-- 前景用アイテムの描画用レイヤー-->
                                    <div class="front_render"></div>
                                    <!-- メッセージやアナウンス用のレイヤー-->
                                    <div class="notifier_render"></div>
                                </div>
                            </div>
                            <div class="m-2" style="background-color: #4682b4; height:120px; border-radius: 20px; position:relative;">
                                <div class="position-absolute top-50 start-50 translate-middle" style="width:360px">
                                    <div class="m-2">
                                        <div style="overflow-y: scroll; height:65px;">
                                            <div style="color: #FFF; list-style:none; font-size:12px;"></div>
                                        </div>
                                    </div>
                                    <div class="m-2">
                                        <input type="text" style="height:20px; width:310px; font-size:12px;">
                                        <span class="ps-1 pe-1" style="background-color:#fff; border-radius: 5px;"><i class="fa-regular fa-comment-dots" style="color:#4682b4;"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="interface" class="col-md">
                            <islandinterface @eventTest2="changecursor" @foodEvent="changefood"></islandinterface>
                        </div>
                    </div>
                </div>
                `,
    props: {

    },
    data: ()=>{
        return{
            cursorstate: 0,//0:通常,1:つつく,2:はたく

            foodstate: 0, //0:なし,1:テントウムシ,2:バッタ,3:コガネ
        }
    },
    methods:{
        changecursor: function(val){
            this.cursorstate = val;
            //console.log(val);
        },
        changefood: function(val){
            this.foodstate = val;

            //console.log(val);
        },
    },

})
