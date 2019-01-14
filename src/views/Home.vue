<template>
    <div class="home">
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
            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                <h1>TNI DAY</h1>
            </b-carousel-slide>
            <!-- Text slides with image -->
            <b-carousel-slide caption="A2 Hall"
                              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                              img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>
            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                     src="https://picsum.photos/1024/480/?image=55" alt="image slot">
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                    ut lacus vel interdum.
                </p>
            </b-carousel-slide>

        </b-carousel>
        <!--card-->
        <b-card v-for="i in 10"
                :title="`Content ${i}`"
                :img-src="`https://picsum.photos/600/300/?image=${i * rand}`"
                img-alt="Image"
                img-top
                style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                tag="article"
                class="mb-2">
            <p class="card-text">
                This is Content for Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-row>
                <b-col/>
                <b-col/>
                <b-col>
                    <b-button href="#" variant="primary">อ่านต่อ...</b-button>
                </b-col>
            </b-row>

        </b-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rand: Math.round(Math.random() * 20) + 1,
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>
<style type="scss">
    home.b-card {
        text-align: center;
    }
</style>
