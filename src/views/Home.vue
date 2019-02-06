<template>
    <div class="home">
        <div class="homed">
            <b-carousel id="carousel1"
                        style="text-shadow: 1px 1px 2px #333; max-width: 50rem;"
                        controls
                        indicators
                        background="#ababab"
                        :interval="4000"
                        img-width="1024"
                        img-height="480"
                        v-model="slide"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"

            >
                <!-- Text slides with image -->
                <b-carousel-slide caption="IT Kung Present"
                                  text="Welcome to Faculty of Information Technology"
                                  img-src="https://picsum.photos/1024/480/?image=52"
                />
                <!-- Slides with image only -->
                <b-carousel-slide caption="IT"
                                  text="Information Technology Program"
                                  img-src="https://picsum.photos/1024/480/?image=52"
                />
                <b-carousel-slide caption="BI"
                                  text="Business Information Technology Program"
                                  img-src="https://picsum.photos/1024/480/?image=53"
                />
                <b-carousel-slide caption="MT"
                                  text="Multimedia Technology Program"
                                  img-src="https://picsum.photos/1024/480/?image=54"
                />
                <b-carousel-slide caption="DC"
                                  text="Digital Technology in Mass Communication Program"
                                  img-src="https://picsum.photos/1024/480/?image=55"
                />
            </b-carousel>
            <!--card-->
            <b-card-group desk>
                <b-card title="เกี่ยวกับคณะ"
                        img-src=""
                        img-alt="aboutme"
                        img-top
                        style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                        tag="article"
                        class="mb-2"
                        to="/about"
                >
                    <p class="card-text">
                        ความเป็นมาที่เกี่ยวกับคณะเทคโนโลยีสาระสนเทศ.
                    </p>
                    <footer>
                        <b-button to="/tni" variant="outline-dark">Go somewhere</b-button>
                    </footer>
                </b-card>

                <b-card title="สาขาและหลักสูตร"
                        img-src=""
                        img-alt="Curriculum"
                        img-top
                        style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                        tag="article"
                        class="mb-2">
                    <p class="card-text">
                        รายละเอียดของสาขาและหลักสูตรของคณะเทคโนโลยีสาระสนเทศทั้งหมด.
                    </p>
                    <footer>
                        <b-button to="/section" variant="outline-dark">Go somewhere</b-button>
                    </footer>
                </b-card>

                <b-card title="ข่าวสารและกิจกรรม"
                        img-src=""
                        img-alt="NEWS"
                        img-top
                        style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                        tag="article"
                        class="mb-2">
                    <p class="card-text">
                        ข่าวสารและกิจกรรมต่างๆของทางคณะ
                    </p>
                    <footer>
                        <b-button to="/news" variant="outline-dark">Go somewhere</b-button>
                    </footer>
                </b-card>

                <b-card title="ทุนแลกเปลี่ยน"
                        img-src=""
                        img-alt="internship"
                        img-top
                        style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                        tag="article"
                        class="mb-2">
                    <p class="card-text">
                        ข่าวสารเกี่ยวกับทุนแลกเปลี่ยนการศึกษาต่างๆจากทางคณะ
                    </p>
                    <footer>
                        <b-button to="/internship" variant="outline-dark">Go somewhere</b-button>
                    </footer>
                    </footer>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>
<style type="scss">
    home.b-card {
        text-align: center;
    }
</style>
