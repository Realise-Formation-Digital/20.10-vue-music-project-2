<template>
  <v-app>
    <v-container pa-10>
      <v-layout row>
        <v-flex md6 >
          <v-card dark tile flat color="teal">
            <v-card-text>
               <h2>ABOUT VUEMUSIC</h2>
               <p>VUEMUSIC is one of the most trusted production music libraries in the world. With a wide variety of high-quality music 
   and world-class customer service, we have clients from all over the world who use our music in everything from personal 
   web videos to major network television broadcasts and major feature films.  In addition to the music that we provide to 
   our clients, VUEMUSIC also has been at the forefront of innovations in the music industry since its inception in 2001.</p>
               <p>In 2013 VUEMUSIC entered into an agreement with YouTube that revolutionizes how people use music and videos on the internet. 
   Under this new agreement, all the tracks in the VUEMUSIC library will be FREE for use on YouTube (personal use only).</p>
               <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="40"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="message"
      :counter="50"
      :rules="messageRules"
      label="Message"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md6>
          <v-card dark tile flat color="blue darken-4">
            <v-card-text>
               <p>Most importantly, we here at VUEMUSIC care deeply about the music we provide and the customers who utilize our services. 
   We've designed our website to provide the most accessible and easy-to-understand licensing process possible, and our hands-on 
   customer support is always glad to assist whenever needed.</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout> 
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 40) || 'Name must be less than 40 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length >= 50) || 'Message must be more than 50 characters',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }

</script>