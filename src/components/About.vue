<template>
  <div class="container pt-3 my-auto">
    <div class="row">
        <div class="col-md-12" style="background-color:black;">
            <div align="center"><img src="../images/about-us.png"></div>
        </div>
    </div>
    <div class="row" style="background-color:crimson;">
        <div class="col-md-3">
            <div align="center"><img src="../images/scrum-master.png" class="rounded-circle">
            <h3>Scrum Master</h3>
            <h4>Ms Aurélie</h4></div>
        </div>
        <div class="col-md-3">
            <div align="center"><img src="../images/scrum-master1.png" class="rounded-circle">
            <h3>Scrum Master Assistant</h3>
            <h4>Mr Brusk</h4></div>
        </div>
        <div class="col-md-3">
            <div align="center"><img src="../images/product-owner.png" class="rounded-circle">
            <h3>Product Owner</h3>
            <h4>Mr Lahouari</h4></div>
        </div>
        <div class="col-md-3">
            <div align="center"><img src="../images/developer.png" class="rounded-circle">
            <h3>Web Development Team</h3>
            <h4>Mr Ruben - Mr Simon</h4></div>
        </div>
    </div>
   <div class="row">
       <div class="col-md-6" style="background-color:black;">
           <div class="row justify-content-center">
               <div class="col-12">
                    <div class="card border-primary rounded-0">
                        <div class="card-header p-0">
                            <div class="bg-info text-white text-center py-2">
                                <h3><i class="fa fa-envelope"></i> Send Us a Message - We Want to Meet You!</h3>
                                <p class="m-0">Vue Music</p>
                                <p>We value relationships – with each other, and with the businesses we partner with. 
                                   Give us a call today at +41 777-666-555 or fill out the form here to learn about our 
                                   team, and find out how we can work with you to help your business grow!</p>
                            </div>
                        </div>
                        <div class="card-body p-3">
                            <form @submit.prevent="handleSubmit">
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" v-model="user.name" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.user.name.$error }" />
                                        <div v-if="submitted && !$v.user.name.required" class="invalid-feedback">Name is required</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                        </div>
                                        <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                        <span v-if="!$v.user.email.required">Email is required</span>
                                        <span v-if="!$v.user.email.email">Email is invalid</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                        </div>
                                        <textarea v-model="user.message" id="message" name="message" class="form-control" :class="{ 'is-invalid': submitted && $v.user.message.$error }" />
                                        <div v-if="submitted && !$v.user.message.required" class="invalid-feedback">Message is required</div>
                                    </div>
                                </div>
                                <div class="form-group text-center">
                                    <input type="submit" value="Submit" class="btn btn-info btn-block rounded-0 py-2">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6" style="background-color:black;">
	<div class="row justify-content-center">
		<div class="col-12">
            <div align="center" class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=rue%20viguet%208%20gen%C3%A8ve&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a><br><a href="https://www.embedgooglemap.net"></a></div></div>
        </div>
    </div>
    </div>
    </div>
    <div class="row" style="background-color:crimson;">
        <div align="center" class="col-md-4">
            <span class="diff-font text-white"><h5>STAY IN TOUCH</h5></span><br />
            <span class="text-white"> +41 777-666-555</span>
        </div>
        <div align="center" class="col-md-4">
            <span class="diff-font text-white"><h5>LOCATION</h5></span><br />
            <span class="text-white">Rue Viguet 8</span><br />
            <span class="text-white">1227 Geneva</span><br />
            <span class="text-white">Switzerland</span>            
        </div>
        <div class="col-md-4">
            <span class="diff-font text-white"><h5>TEAM</h5></span><br />
            <span class="text-white"><i class="fa fa-envelope text-info"></i> Ms Aurélie</span><br />
            <span class="text-white"><i class="fa fa-envelope text-info"></i> Mr Brusk</span><br />
            <span class="text-white"><i class="fa fa-envelope text-info"></i> Mr Lahouari</span><br />
            <span class="text-white"><i class="fa fa-envelope text-info"></i> Mr Ruben</span><br />
            <span class="text-white"><i class="fa fa-envelope text-info"></i> Mr Simon</span>
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate'

    export default {
        mixins: [validationMixin],
        name: "About",
        data() {
            return {
                user: {
                    name: "",
                    email: "",
                    message: ""
                },
                submitted: false,
            };
            
        },
        validations: {
            user: {
                name: { required },
                email: { required, email },
                message: { required }
            }
        },
        methods: {

            // eslint-disable-next-line no-unused-vars
            handleSubmit(e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
            }
        }
    };
</script>



<style>
iframe {
    width:100%;height:100%;
    }
.gmap_canvas {
    overflow:hidden;background:none!important;height:500px;width:500px;
    }

</style>
