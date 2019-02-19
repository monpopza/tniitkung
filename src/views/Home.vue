<template>
    <div class="home">
        <div class="homed">
            <b-carousel id="carousel1"
                        style="text-shadow: 1px 1px 2px #333; max-width: 100vw;"
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
                <b-carousel-slide
                                  text="Welcome to Faculty of Information Technology"
                                  img-src="https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/22406310_194532097757913_6072644510784826025_n.png?_nc_cat=108&_nc_eui2=AeFgUWB5I-7g-7PmGoSqnqz_tYkljvvl0JErHqh4iw9IasN-dkdqFYuEWrSW1iI_PRMm15bgsMFS0cRxOUaOBap43wDcajjN_-LEoFkLur4FUeZ1oGBhvwKRIAuFIIFpvNE&_nc_ht=scontent.fbkk3-2.fna&oh=f7d5305df1a307187e75789afb03be7e&oe=5CB6A133"
                />
                <!-- Slides with image only -->
                <b-carousel-slide to="/section/it"
                                  text="Information Technology Program"
                                  img-src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/47573899_2429537267116639_4129805664367149056_o.jpg?_nc_cat=107&_nc_eui2=AeHDBsB54PAQvUZdR2w5vqqoI87sGlgrjpslFQcQVOeZ7a5VyWQCKS3I36XulqGnJMTufav9ZUdxgNXYpVMHquXRQ_idWmqqiGV7bILpNeXbZw&_nc_ht=scontent.fbkk8-2.fna&oh=4fca5e7ed6e6b00401e2095ae9e58b6a&oe=5CE72F67"
                />
                <b-carousel-slide to="/section/bi"
                                  text="Business Information Technology Program"
                                  img-src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/35049843_2026945347567101_873489622364061696_o.jpg?_nc_cat=101&_nc_eui2=AeGLHjUGUOH7_UG7lVaWKGZpd--W9Javech2HJ6bhA8eWWaTgFn9tOITEhMEDeDU_w-S2lKqMUuOhm6JJfY21t6O_qAORmLrGBzT5u0H8uGsag&_nc_ht=scontent.fbkk12-1.fna&oh=c57c0a8c7be10bb32987512494913ac8&oe=5D012AF1"
                />
                <b-carousel-slide to="/section/mt"
                                  text="Multimedia Technology Program"
                                  img-src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/35227982_2121267341236388_1951043835429650432_n.png?_nc_cat=110&_nc_eui2=AeGEKWm28I2t6eYioGu2FXQsjMdV80Nh4ddsaYhfKW4L--l9zy2NmeeRLWwFmI3A-hc3J2aT9iUStu9FiLg-wDrBA-e-HyTs9OcJhHzlL9oD9Q&_nc_ht=scontent.fbkk12-1.fna&oh=739a828ff54bc065f0e7069c87e29c6c&oe=5D001434"
                />
                <b-carousel-slide to="/section/dc"
                                  text="Digital Technology in Mass Communication Program"
                                  img-src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/34962753_589825494744181_3040784592995876864_n.jpg?_nc_cat=100&_nc_eui2=AeFJB4_kT8w35xgCb_QrZZzTl3sOcj_AkESUirjYijjryhNRpHoxo10YppYPKvU6QH-2Yg2lU7ERnbzXD5j3-lvcHZjYdX6YgRcx6N7amgBjjw&_nc_ht=scontent.fbkk8-3.fna&oh=17e143c59c40a86e294f8d51461cbac1&oe=5CF5DF0C"
                />
            </b-carousel>
            <!--card-->
            <b-card-group desk>
                <b-card title="เกี่ยวกับคณะ"
                        sub-title="เกี่ยวกับคณะเทคโนโลยีสาระสนเทศ"
                        img-src="/pic/facit.png"
                        img-alt="aboutme"
                        img-top
                        style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                        tag="article"
                        class="mb-2"
                        to="/about"
                        border-variant="dark"
                >
                    <footer>
                        <b-button to="/about" variant="outline-dark">อ่านต่อ</b-button>
                    </footer>
                </b-card>

                <b-card title="สาขาและหลักสูตร"
                        sub-title="รายละเอียดของสาขาและหลักสูตรของคณะเทคโนโลยีสาระสนเทศทั้งหมด"
                        img-src="/pic/curr.png"
                        img-alt="Curriculum"
                        img-top
                        style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                        tag="article"
                        class="mb-2"
                        border-variant="dark"
                >
                    <footer>
                        <b-button to="/sections" variant="outline-dark">อ่านต่อ</b-button>
                    </footer>
                </b-card>

                <b-card title="ข่าวสารและกิจกรรม"
                        sub-title="ข่าวสารและกิจกรรมต่างๆของทางคณะ"
                        img-src="/pic/news.png"
                        img-alt="NEWS"
                        img-top
                        style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                        tag="article"
                        class="mb-2"
                        border-variant="dark"
                >
                    <footer>
                        <b-button to="/news" variant="outline-dark">อ่านต่อ</b-button>
                    </footer>
                </b-card>

                <b-card title="ทุนแลกเปลี่ยน"
                        sub-title="ข่าวสารเกี่ยวกับทุนแลกเปลี่ยนการศึกษาต่างๆจากทางคณะ"
                        img-src="/pic/sco.png"
                        img-alt="internship"
                        img-top
                        style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                        tag="article"
                        class="mb-2"
                        border-variant="dark"
                >
                    <footer>
                        <b-button to="/internship" variant="outline-dark">อ่านต่อ</b-button>
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
