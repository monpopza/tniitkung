<template>
    <div>
        <b-card-group desk>
            <b-card to="/section/it"
                    title="สาขาวิชาเทคโนโลยีสารสนเทศ"
                    img-src=""
                    img-alt="it"
                    img-top
                    style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                    tag="article"
                    class="mb-2"
                    bg-variant="primary"
                    text-variant="white"
            >
                <p class="card-text">
                    INFORMATION TECHNOLOGY
                </p>
                <footer>
                    <b-button to="/section/#" variant="light">Go somewhere</b-button>
                </footer>
            </b-card>

            <b-card title="สาขาวิชาเทคโนโลยีสารสนเทศทางธุรกิจ"
                    img-src=""
                    img-alt="it"
                    img-top
                    style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                    tag="article"
                    class="mb-2"
                    bg-variant="info"
                    text-variant="white"
            >
                <p class="card-text">
                    BUSINESS INFORMATION TECHNOLOGY
                </p>
                <footer>
                    <b-button to="/section/#" variant="light">Go somewhere</b-button>
                </footer>
            </b-card>

            <b-card title="สาขาวิชาเทคโนโลยีสารสนเทศมัลติมีเดีย"
                    img-src=""
                    img-alt="mt"
                    img-top
                    style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                    tag="article"
                    class="mb-2"
                    bg-variant="danger"
                    text-variant="white"
            >
                <p class="card-text">
                    MULTIMEDIA TECHNOLOGY
                </p>
                <footer>
                    <b-button to="/section/#" variant="light" >Go somewhere</b-button>
                </footer>
            </b-card>

            <b-card title="สาขาเทคโนโลยีดิจิตัลทางสื่อสารมวลชน"
                    img-src=""
                    img-alt="it"
                    img-top
                    style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                    tag="article"
                    class="mb-2"
                    bg-variant="success"
                    text-variant="white"
            >
                <p class="card-text">
                    DIGITAL TECHNOLOGY IN MASS COMMUNICATION
                </p>
                <footer>
                    <b-button to="/section/#" variant="light">Go somewhere</b-button>
                </footer>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        name: 'Section'
    }
</script>

<style scoped>
footer{
    margin:auto;
}
</style>
