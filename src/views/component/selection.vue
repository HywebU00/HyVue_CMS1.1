<template>
  <v-container class="container">
    <h2>选择组件（Selection）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                步骤条（Steppers）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <div class="mt-3">
                  <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
                    <template v-slot:item.1>
                      <v-card title="Step One" flat>aaa</v-card>
                    </template>

                    <template v-slot:item.2>
                      <v-card title="Step Two" flat>bbb</v-card>
                    </template>

                    <template v-slot:item.3>
                      <v-card title="Step Three" flat>ccc</v-card>
                    </template>
                  </v-stepper>
                </div>
                <div class="mt-3">
                  <v-stepper model-value="2">
                    <v-stepper-header>
                      <v-stepper-item
                        title="Select campaign settings"
                        value="1"
                        complete
                      ></v-stepper-item>

                      <v-divider></v-divider>

                      <v-stepper-item
                        title="Create an ad group"
                        value="2"
                      ></v-stepper-item>

                      <v-divider></v-divider>

                      <v-stepper-item
                        title="Create an ad"
                        value="3"
                      ></v-stepper-item>
                    </v-stepper-header>
                  </v-stepper>
                </div>
                <div class="mt-3">
                  <v-stepper model-value="3">
                    <v-stepper-header>
                      <v-stepper-item
                        title="Job Search"
                        value="1"
                        complete
                      ></v-stepper-item>

                      <v-divider></v-divider>

                      <v-stepper-item
                        :rules="[() => false]"
                        subtitle="Missing Details"
                        title="Submit Application"
                        value="2"
                      ></v-stepper-item>

                      <v-divider></v-divider>

                      <v-stepper-item
                        title="Interview Process"
                        value="3"
                      ></v-stepper-item>

                      <v-divider></v-divider>

                      <v-stepper-item
                        title="Hiring Decision"
                        value="4"
                      ></v-stepper-item>
                    </v-stepper-header>
                  </v-stepper>
                </div>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
