<template>
  <b-container style="max-width:100%">
    <b-header>
        <div style="padding-left:25%;padding-top:50px;max-width:100%">
          <span style="padding-left:45%;">LET US KNOW, HOW CAN WE HELP? CALL OUR OFFICE AT LHASA</span>
        </div>
        <div style="padding-left:25%;padding-top:5px;max-width:100%">
          <span class="index index-title name">TIBET MAKALU ADVENTURES</span>
           <b-link href="#foo" style="padding-left:33%;">Info@tibetmakaluadventures.com</b-link>
           <b-link href="#foo">+86 891 6364006</b-link>
        </div>
		</b-header>
    <b-main>
      <div style="background-color: #e4d60f;">
        <b-navbar  toggleable style="padding-left:25%;">
          <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
              <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item-dropdown text="ABOUT TIBET" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
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
        <div style="padding-left:25%;width:75%;padding-top:20px;">
          <div>
            <h2 class="text-center">
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
              <div>
                <b-card-group deck>
                    <b-card title="Title"
                            img-src="https://picsum.photos/300/300/?image=41"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                    <b-card title="Title"
                            img-src="https://picsum.photos/300/300/?image=41"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This card has supporting text below as a natural lead-in
                            to additional content.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                    <b-card title="Title"
                            img-src="https://picsum.photos/300/300/?image=41"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                              This is a wider card with supporting text below as a natural
                              lead-in to additional content. This card has even longer content
                              than the first to show that equal height action.
                          </p>
                          <div slot="footer">
                              <small class="text-muted">Last updated 3 mins ago</small>
                          </div>
                      </b-card>
                </b-card-group>
            </div>
          </div>
        </div>
    </b-main>
  </b-container>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
