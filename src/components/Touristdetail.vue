<template>
  <b-container style="max-width:100%">
    <b-header> 
      <div>
        <transition name="fade" mode="out-in">
              <router-view></router-view>
          </transition>
      </div>
      <div style="padding-top:40px;max-width:100%;background-color: #B87F03;height:120px">
        <div style="float:left;">
          <img src='../img/makalu.jpg' style="width:left;"/>
        </div>
        <div style="padding-left:50%;">
          <span>LET US KNOW, HOW CAN WE HELP? CALL OUR OFFICE AT LHASA</span>
        </div>
      </div>
      <div style="padding-left:25%;padding-top:5px;max-width:100%;background-color: #B87F03;">
        <span class="index index-title name">TIBET MAKALU ADVENTURES</span>
        <b-link href="#foo" style="padding-left:33%;">Info@tibetmakaluadventures.com</b-link>
        <b-link href="#foo">+86 891 6364006</b-link>
      </div>
		</b-header>
    <b-main>
      <div style="background-color: #1A1711;height:70px;">
        <b-navbar  toggleable style="height:70px;position:absolute;" type="dark">
          <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
              <b-nav-item href="/">Home</b-nav-item>
              <b-nav-item-dropdown text="ABOUT TIBET" right>
                <b-dropdown-item href="" @click="jump()">news</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="TIBETTOURS" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="TIBETTREKKINGS" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="TIBETEXPEDITIONS" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="TIBET TRAVERL PERIMIT" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="FAQ" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="ABOUT US" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="CONTACT US" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div style="width:80%;padding-top:20px;padding-left:10%;">
        <div>
          <h3>Lhasa Holy City Tour</h3>
        </div>
        <b-row class="justify-content-md-center">
          <b-col >
            <div>
              <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"/>
            </div>
          </b-col>
          <b-col cols="4">
            <div>
             <dl>
               <dd style="float:left;background:#ededed;width:40%;height:40px">
                 4 Days
               </dd>
               <dd style="float:left;background:#ededed;width:60%;height:40px">
                 You Choose Departure!
               </dd>
               <dd style="">
                 Explore Lhasa city, to see the most important sights in Lhasa
               </dd>
               <dd style="background:#ededed;">
                 Potala Palace, Jokhang Temple, Barkhor Street, Drepung Monastery, Sera Monastery
               </dd>
             </dl>
           </div>
           <div>
             <b-button variant="outline-success">Inquiry Now</b-button>
           </div>
          </b-col>
          <b-col>
            <h4>Trip Day By Day</h4>
            <dl>
              <dd>
                <span style="background:#8f752a;display:inline-block;color:#fff;padding:0 2px 0 4px">
                  Day 
                  <i style="background:#f1f1f1;display:inline-block;color:#8f752a;padding:0 6px">1</i>
                </span>
                <em>Arrival and acclimatization</em>
              </dd>
              <dd>
                <span style="background:#8f752a;display:inline-block;color:#fff;padding:0 2px 0 4px">
                  Day 
                  <i style="background:#f1f1f1;display:inline-block;color:#8f752a;padding:0 6px">2</i>
                </span>
                <em> Sightseeing in Lhasa</em>
              </dd>
              <dd>
                <span style="background:#8f752a;display:inline-block;color:#fff;padding:0 2px 0 4px">
                  Day 
                  <i style="background:#f1f1f1;display:inline-block;color:#8f752a;padding:0 6px">3</i>
                </span>
                <em>Lhasa-Namtso Lake</em>
              </dd>
              <dd>
                <span style="background:#8f752a;display:inline-block;color:#fff;padding:0 2px 0 4px">
                  Day 
                  <i style="background:#f1f1f1;display:inline-block;color:#8f752a;padding:0 6px">4</i>
                </span>
                <em>Namtso Lake-Lhasa-Sera Monastery</em>
              </dd>
            </dl>
          </b-col>
        </b-row>
        <div style="padding-top:20px">
          <h3 style="color:#005e15">Detailed Itinerary</h3>
          <dd>
            <p>显示具体行程安排，可以插入图片或视频</p>
          </dd>
        </div>
      </div>
      <div style="padding-top:100px;">
        <div style="background-color: #1A1711;height:60px;">
          <div style="padding-left:50%">
            <b-navbar  toggleable style="" type="dark">
              <b-navbar-brand href="#" style="padding-left:1%">Tibet Tour Booking Steps</b-navbar-brand>
              <b-navbar-brand href="#" style="padding-left:1%">Destinations</b-navbar-brand>
              <b-navbar-brand href="#" style="padding-left:1%">Tibet Travel FAQs</b-navbar-brand>
              <b-navbar-brand href="#" style="padding-left:1%">CONTAC US</b-navbar-brand>
            </b-navbar>
          </div>
        </div>
      </div>
      <div style="height:150px;background-color: #B87F03;">
      </div>
    </b-main>
  </b-container>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      items: [
        { Time: 40, info: 'Dickerson' },
        { Time: 21, info: 'Larsen'}
      ]
    }
  },
  methods:{

  }
}
</script>

<style>
p.serif{
  font-family:"Times New Roman",Georgia,Serif
}
row{
  margin-right: -15px;
  margin-left: -15px;
}
</style>
