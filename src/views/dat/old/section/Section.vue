<template>
    <div>
        <b-card-group desk>
            <b-card to="/section/it"
                    title="สาขาวิชาเทคโนโลยีสารสนเทศ"
                    img-src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/47573899_2429537267116639_4129805664367149056_o.jpg?_nc_cat=107&_nc_eui2=AeHDBsB54PAQvUZdR2w5vqqoI87sGlgrjpslFQcQVOeZ7a5VyWQCKS3I36XulqGnJMTufav9ZUdxgNXYpVMHquXRQ_idWmqqiGV7bILpNeXbZw&_nc_ht=scontent.fbkk8-2.fna&oh=4fca5e7ed6e6b00401e2095ae9e58b6a&oe=5CE72F67"
                    img-alt="it"
                    img-top
                    style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                    tag="article"
                    class="mb-2"
                    bg-variant="primary"
                    text-variant="white"
            >
                <p class="card-text">
                    Information Technology
                </p>
                <footer>
                    <b-button to="/section/it" variant="light">สนใจสาขานี้ใช่ไหมฮะ</b-button>
                </footer>
            </b-card>

            <b-card title="สาขาวิชาเทคโนโลยีสารสนเทศทางธุรกิจ"
                    img-src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/35162054_2026945350900434_8320310735729065984_n.jpg?_nc_cat=100&_nc_ht=scontent.fbkk5-5.fna&oh=5f20bc2e795c518a48be15626752455c&oe=5CFD1C12"
                    img-alt="it"
                    img-top
                    style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                    tag="article"
                    class="mb-2"
                    bg-variant="info"
                    text-variant="white"
            >
                <p class="card-text">
                    Business Information Technology
                </p>
                <footer>
                    <b-button to="/section/bi" variant="light">สนใจสาขานี้ใช่ไหมฮะ</b-button>
                </footer>
            </b-card>

                <b-card title="สาขาวิชาเทคโนโลยีสารสนเทศมัลติมีเดีย"
                    img-src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/35227982_2121267341236388_1951043835429650432_n.png?_nc_cat=110&_nc_eui2=AeGEKWm28I2t6eYioGu2FXQsjMdV80Nh4ddsaYhfKW4L--l9zy2NmeeRLWwFmI3A-hc3J2aT9iUStu9FiLg-wDrBA-e-HyTs9OcJhHzlL9oD9Q&_nc_ht=scontent.fbkk12-1.fna&oh=739a828ff54bc065f0e7069c87e29c6c&oe=5D001434"
                    img-alt="mt"
                    img-top
                    style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                    tag="article"
                    class="mb-2"
                    bg-variant="success"
                    text-variant="white"
            >
                <p class="card-text">
                    Multimedia Technology
                </p>
                <footer>
                    <b-button to="/section/mt" variant="light">สนใจสาขานี้ใช่ไหมฮะ</b-button>
                </footer>
            </b-card>

            <b-card title="สาขาเทคโนโลยีดิจิตัลทางสื่อสารมวลชน"
                    img-src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/34962753_589825494744181_3040784592995876864_n.jpg?_nc_cat=100&_nc_eui2=AeFJB4_kT8w35xgCb_QrZZzTl3sOcj_AkESUirjYijjryhNRpHoxo10YppYPKvU6QH-2Yg2lU7ERnbzXD5j3-lvcHZjYdX6YgRcx6N7amgBjjw&_nc_ht=scontent.fbkk8-3.fna&oh=17e143c59c40a86e294f8d51461cbac1&oe=5CF5DF0C"
                    img-alt="it"
                    img-top
                    style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                    tag="article"
                    class="mb-2"
                    bg-variant="danger"
                    text-variant="white"
            >
                <p class="card-text">
                        Digital Technology in Mass Communication
                </p>
                <footer>
                    <b-button to="/section/dc" variant="light">สนใจสาขานี้ใช่ไหมฮะ</b-button>
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
