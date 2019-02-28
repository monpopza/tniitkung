<template>
    <b-card-group>
        <b-card title="สาขาเทคโนโลยีสารสนเทศทางธุรกิจ"
                sub-title="Business Information Technology"
                img-src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/35162054_2026945350900434_8320310735729065984_n.jpg?_nc_cat=100&_nc_ht=scontent.fbkk5-5.fna&oh=5f20bc2e795c518a48be15626752455c&oe=5CFD1C12"
                img-top
                border-variant="info"
                class="mb-2"
        >
            <b-list-group flush>
                <b-list-group-item>
                    <b-embed type="iframe"
                             aspect="16by9"
                             src="https://www.youtube.com/embed/DKABSaaGxYk"
                    />
                    <p class="card-text" style="text-align: center;font-style: italic">วีดีโอแนะนำของสาขานี้ฮะ</p>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button variant="outline-dark"
                              href="https://it.tni.ac.th/curriculum/bachelor-degree/bi/"
                    >
                        หน้าเว็ปไซต์หลัก
                    </b-button>
                    |
                    <b-button variant="outline-dark"
                              href="https://it.tni.ac.th/wp-content/uploads/2018/05/BI_TQF2_Revised_58-for-Web.pdf"
                    >
                        หลักสูตร
                    </b-button>
                </b-list-group-item>
                <b-list-group-item>
                    <p class="card-text">Social Media</p>
                    <b-button variant="primary"
                              href="https://web.facebook.com/bi.thainichi"
                    >
                        Facebook
                    </b-button>
                     |
                    <b-button variant="danger"
                              href="https://www.youtube.com/channel/UCOMVmuT0gRQxBGAFBDgqBLg">
                        Youtube
                    </b-button>
                </b-list-group-item>
            </b-list-group>
        </b-card>
    </b-card-group>
</template>

<script>
    export default {
        name: "bi"
    }
</script>

<style scoped>

</style>
