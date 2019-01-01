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
      <div>
            <b-carousel id="carousel1"
                        style="text-shadow: 1px 1px 2px #333;"
                        controls
                        indicators
                        background="#ababab"
                        :interval="4000"
                        img-width="1024"
                        img-height="250"
                        v-model="slide"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
            >

              <!-- Text slides with image -->
              <b-carousel-slide caption="First slide"
                                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                img-src="https://picsum.photos/1024/250/?image=52"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide img-src="https://picsum.photos/1024/250/?image=54">
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide img-src="https://picsum.photos/1024/250/?image=58">
              </b-carousel-slide>
            </b-carousel>
      </div>
      <div style="padding-left:20%;width:75%;padding-top:20px;">
        <div>
          <h2 class="text-center" style="font-family:sans-serif">
            Welcome TO ROOF OF WORLD
            </h2>
          <li>
            Tibet is simply one of the most remarkable places in Asia. It offers fabulous monasteries, breathtaking high-altitude treks, stunning views of the world’s highest
            mountains and one of the most likeable peoples and cultures you will ever meet
            <b-link href="#foo" style="padding-left:20px;">READ MORE......</b-link>
          </li>
        </div>
        <div style="padding-top:50px;">
          <h2 class="text-center">
            Why choose Tibet Makalu Adventures (TMA)?
            </h2>
          <li>
            We are growing small outdoor adventure travel organizer, tour operator and trekking agency. Formed by Local Tibetan youths with years of experience in the Himalayan travel industry! Our staff has lead international groups throughout the Himalaya region. As a quality tour organizer we travel in a small groups managed by a team of professionally trained trekking guides, cooks and climbing guide ensuring that all of our travelers are provided with personal care and the highest quality service. We believe in Green Tourism and our responsibility towards our guests, local people, their customs and culture, to the environment, and to our own crew so you will have an eco friendly experience. We are dedicated to making your holiday in the roof of world. The memories of your holiday adventure activities in the Himalayas will be everlasting.
            Local Experts
            Experienced agency for trekking, tour, climbing & mojor travel service in Nepal is local Nepalese agency own by local experts.
            Eco Friendly
            We operate all trips to be aware on environmental issues which helps to maintain sustainable eco-tourism and purity of environment.
            Service Oriented
            We always provide high quality trekking or tour services for our clients as per their requirement for individual or group travellers.
            Responsible
          </li>
          <h6>
            <b-link>Local Experts</b-link>
          </h6>
          <li>
              Experienced agency for trekking, tour, climbing & mojor travel service in Nepal is local Nepalese agency own by local experts.</li>
          <h6>
            <b-link>Eco Friendly</b-link>
          </h6>
          <li>
            We operate all trips to be aware on environmental issues which helps to maintain sustainable eco-tourism and purity of environment.</li>
          <h6>
            <b-link>Service Oriented</b-link>
          </h6>
          <li>
            We always provide high quality trekking or tour services for our clients as per their requirement for individual or group travellers.</li>
          <h6>
            <b-link>Responsible</b-link>
          </h6>
        </div>
        <div style="padding-top:30px;">
            <div class="d-flex flex-column text-md-center" style="padding-bottom:20px">
              <div class="p-2">
                <b-btn id="tooltipButton-disable" variant="primary" style="background-color: #B87F03;">FEATURES TRIPS & AMAZING TRIPS WITH SPECIAL OFFERS</b-btn>
                <h5 style="padding-top:10px;">With our Advance Purchase Promotion, make your reservation at least 50 days prior to your arrival date.</h5>
              </div>
            </div>
            <div>
              <div>
                <b-card-group deck>
                  <b-card overlay
                          img-src="https://picsum.photos/900/800/?image=10"
                          img-alt="Card Image"
                          text-variant="white"
                          title="Private Tours"
                          img-bottom
                          >
                    <p class="card-text" style="bottom">
                      Some quick example text to build on the card and make
                      up the bulk of the card's content.
                    </p>
                  </b-card>
                  <b-card overlay
                          img-src="https://picsum.photos/900/800/?image=56"
                          img-alt="Card Image"
                          text-variant="white"
                          title="Tibet Permit"
                          >
                    <p class="card-text">
                      Some quick example text to build on the card and make
                      up the bulk of the card's content.
                    </p>
                  </b-card>
                  <b-card overlay
                          img-src="https://picsum.photos/900/800/?image=15"
                          img-alt="Card Image"
                          text-variant="white"
                          title="Tibet Mount Kailash Tours"
                          >
                    <p class="card-text">
                      Some quick example text to build on the card and make
                      up the bulk of the card's content.
                    </p>
                  </b-card>
                </b-card-group>
              </div>
            </div>
        </div>
        <div style="padding-top:30px;">
            <div class="d-flex flex-column text-md-center" style="padding-bottom:20px">
              <div class="p-2">
                <b-btn id="tooltipButton-disable" variant="primary" style="background-color: #B87F03;">Most Popular Tibet Small Group Tour Packages</b-btn>
                <h5 style="padding-top:10px;">With our Advance Purchase Promotion, make your reservation at least 50 days prior to your arrival date.</h5>
              </div>
            </div>
            <div>
              <b-card-group deck>
                  <b-card overlay
                          img-src="https://picsum.photos/900/800/?image=10"
                          img-alt="Card Image"
                          text-variant="white"
                          title="Private Tours"
                          img-bottom
                          >
                    <p class="card-text" style="bottom">
                      Some quick example text to build on the card and make
                      up the bulk of the card's content.
                    </p>
                  </b-card>
                  <b-card overlay
                          img-src="https://picsum.photos/900/800/?image=56"
                          img-alt="Card Image"
                          text-variant="white"
                          title="Tibet Permit"
                          >
                    <p class="card-text">
                      Some quick example text to build on the card and make
                      up the bulk of the card's content.
                    </p>
                  </b-card>
                  <b-card overlay
                          img-src="https://picsum.photos/900/800/?image=15"
                          img-alt="Card Image"
                          text-variant="white"
                          title="Tibet Mount Kailash Tours"
                          >
                    <p class="card-text">
                      Some quick example text to build on the card and make
                      up the bulk of the card's content.
                    </p>
                  </b-card>
                </b-card-group>
            </div>
        </div>
      </div>
      <div style="padding-left:20%;width:75%;padding-top:20px;">
        <div style="background-color: #B87F03;height:50px;text-align:center" class="p-2">
          <h4 >Tibet Travel Advice & Information</h4>
        </div>
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="exampleInputGroup1"
                            label="Email address:"
                            label-for="exampleInput1"
                            description="We'll never share your email with anyone else.">
                <b-form-input id="exampleInput1"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Enter email">
                </b-form-input>
              </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Your Name:"
                          label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Enter name">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Content:"
                          label-for="exampleInput2">
              <b-form-textarea id="textarea1"
                                v-model="form.content"
                                required
                                placeholder="Enter something"
                                :rows="3"
                                :max-rows="6">
             </b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
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
      msg: 'Welcome to Your Vue.js App',
      text: '',
      form: {
        email: '',
        name: '',
        content: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods:{
    jump(){
      this.$router.push('/details');
    },
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.content = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style>
p.serif{
  font-family:"Times New Roman",Georgia,Serif
}
</style>
