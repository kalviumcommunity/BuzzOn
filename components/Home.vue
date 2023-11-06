<template>
  <div class="flex w-full bg-[#F2F5F9] h-screen">
    <!-- SIDEBAR COMPONENT -->
    <div
      class="mx-8 my-8 w-2/12 h-100 bg-[#FFFFFF] rounded-2xl shadow-[#ABABAB] shadow-md flex items-center flex-col font-sans font-medium"
    >
      <!-- BuzzOn Logo -->
      <img class="my-3 h-12" src="../public/images/logo.svg" alt="Logo Image" />

      <!-- Links Section -->
      <div
        class="my-4 w-10/12 h-full flex flex-col items-center gap-y-4 text-base font-inria"
      >
        <div
          class="w-full h-11/12 py-3 px-6 flex gap-4 items-center bg-[#EFEFEF]"
        >
          <img class="h-5" src="../public/images/home.svg" alt="" />Home
        </div>

        <div class="w-full h-11/12 py-3 px-6 flex gap-4 items-center">
          <img class="h-5" src="../public/images/message.svg" alt="" />Message
        </div>

        <div class="w-full h-11/12 py-3 px-6 flex gap-4 items-center">
          <img class="h-5" src="../public/images/reels.svg" alt="" />Reels
        </div>

        <div class="w-full mb-14 h-11/12 py-3 px-6 flex gap-4 items-center">
          <img class="h-5" src="../public/images/post.svg" alt="" />Posts
        </div>
        <div class="mt-96 w-full h-11/12 py-3 px-6 flex gap-4 items-center">
          <img class="h-5" src="../public/images/profile.svg" alt="" />Profile
        </div>
      </div>
    </div>

    <!-- Message component -->
    <div
      class="mr-8 my-8 w-5/12 h-100 bg-[#FFFFFF] rounded-2xl shadow-[#ABABAB] shadow-md flex items-center flex-col font-sans font-medium"
    >
      <h1>Messages</h1>
    </div>

    <div class="flex flex-col w-full">
      <!-- NAVBAR COMPONENT -->
      <!-- <div class="h-16 pt-3 w-11/12 mt-8 items-center flex justify-between">
        <input
          class="h-12 w-2/5 rounded-full bg-[#DEDEDE] pl-4"
          type="search"
          name="Search"
          id=""
          placeholder=" Search creator, content"
          on-focus=""
        />
        <button
          class="bg-[#0087FF] text-white font-bold w-36 py-2 rounded-full"
        >
          Create
        </button>
      </div> -->

      <div class="w-full">
        <!-- STATUS COMPOENENT -->
        <div class="mt-8 mr-8 gap-5 w-full flex items-start">
          <button
            class="h-12 w-12 rounded-full flex border border-[#0087FF] items-center justify-center"
          >
            <img src="../public/images/add.svg" alt="" srcset="" />
          </button>
          <div class="h-12 w-12 rounded-full flex cursor-pointer">
            <img src="../public/images/user1.svg" alt="" />
          </div>
          <div class="h-12 w-12 rounded-full flex cursor-pointer">
            <img src="../public/images/user2.svg" alt="" />
          </div>
          <div class="h-12 w-12 rounded-full flex cursor-pointer">
            <img src="../public/images/user4.svg" alt="" />
          </div>
          <div class="h-12 w-12 rounded-full flex cursor-pointer">
            <img src="../public/images/user5.svg" alt="" />
          </div>
          <div class="h-12 w-12 rounded-full flex cursor-pointer">
            <img src="../public/images/user6.svg" alt="" />
          </div>
          <div class="h-12 w-12 rounded-full flex cursor-pointer">
            <img src="../public/images/user7.svg" alt="" />
          </div>
          <div class="h-12 w-12 rounded-full flex cursor-pointer">
            <img src="../public/images/user8.svg" alt="" />
          </div>
          <div class="h-12 w-12 rounded-full flex cursor-pointer">
            <img src="../public/images/user9.svg" alt="" />
          </div>
        </div>

        <!-- POST COMPONENT -->
        <div class="w-full flex items-start">
          <div
            id="scrollableDiv"
            class="mt-4 w-7/12 h-[780px] pr-3 overflow-y-scroll overflow-x-hidden custom-scrollbar"
          >
            <div
              class="w-full h-auto mt-8 mr-8 bg-[#FFFFFF] rounded-2xl shadow-[#ABABAB] shadow-md p-4 justify-between"
            >
              <div class="w-full h-16 flex items-center justify-between">
                <div class="flex items-center w-full">
                  <img
                    class="h-16 w-16 rounded-full"
                    src="../public/images/user5.svg"
                    alt=""
                  />
                  <h1 class="ml-4 text-base font-semibold">Mary Jane</h1>
                </div>
                <button
                  class="flex items-center justify-center bg-[#0087FF] px-4 text-white gap-1 py-2 rounded-md"
                >
                  <img
                    class="fill-white h-6"
                    src="../public/images/add.svg"
                    alt=""
                    srcset=""
                  />Follow
                </button>
              </div>
              <div class="w-full flex h-full">
                <div class="w-11/12 flex justify-center">
                  <img
                    class="h-80"
                    src="../public/images/postImage.svg"
                    alt=""
                  />
                </div>
                <div
                  class="w-1/12 h-80 p-3 gap-4 flex flex-col justify-end items-center"
                >
                  <button>
                    <img class="h-5" src="../public/images/like.svg" alt="" />
                  </button>
                  <button>
                    <img
                      class="h-5"
                      src="../public/images/comment.svg"
                      alt=""
                    />
                  </button>
                  <button>
                    <img class="h-5" src="../public/images/share.svg" alt="" />
                  </button>
                  <button>
                    <img class="h-5" src="../public/images/save.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="w-full h-auto mt-8 mr-8 bg-[#FFFFFF] rounded-2xl shadow-[#ABABAB] shadow-md p-4 justify-between"
            >
              <div class="w-full h-16 flex items-center justify-between">
                <div class="flex items-center w-full">
                  <img
                    class="h-16 w-16 rounded-full"
                    src="../public/images/user5.svg"
                    alt=""
                  />
                  <h1 class="ml-4 text-base font-semibold">Mary Jane</h1>
                </div>
                <button
                  class="flex items-center justify-center bg-[#0087FF] px-4 text-white gap-1 py-2 rounded-md"
                >
                  <img
                    class="fill-white h-6"
                    src="../public/images/add.svg"
                    alt=""
                    srcset=""
                  />Follow
                </button>
              </div>
              <div class="w-full flex h-full">
                <div class="w-11/12 flex justify-center">
                  <img
                    class="h-80"
                    src="../public/images/postImage.svg"
                    alt=""
                  />
                </div>
                <div
                  class="w-1/12 h-80 p-3 gap-4 flex flex-col justify-end items-center"
                >
                  <button>
                    <img class="h-5" src="../public/images/like.svg" alt="" />
                  </button>
                  <button>
                    <img
                      class="h-5"
                      src="../public/images/comment.svg"
                      alt=""
                    />
                  </button>
                  <button>
                    <img class="h-5" src="../public/images/share.svg" alt="" />
                  </button>
                  <button>
                    <img class="h-5" src="../public/images/save.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="w-full h-auto mt-8 mr-8 bg-[#FFFFFF] rounded-2xl shadow-[#ABABAB] shadow-md p-4 justify-between"
            >
              <div class="w-full h-16 flex items-center justify-between">
                <div class="flex items-center w-full">
                  <img
                    class="h-16 w-16 rounded-full"
                    src="../public/images/user5.svg"
                    alt=""
                  />
                  <h1 class="ml-4 text-base font-semibold">Mary Jane</h1>
                </div>
                <button
                  class="flex items-center justify-center bg-[#0087FF] px-4 text-white gap-1 py-2 rounded-md"
                >
                  <img
                    class="fill-white h-6"
                    src="../public/images/add.svg"
                    alt=""
                    srcset=""
                  />Follow
                </button>
              </div>
              <div class="w-full flex h-full">
                <div class="w-11/12 flex justify-center">
                  <img
                    class="h-80"
                    src="../public/images/postImage.svg"
                    alt=""
                  />
                </div>
                <div
                  class="w-1/12 h-80 p-3 gap-4 flex flex-col justify-end items-center"
                >
                  <button>
                    <img class="h-5" src="../public/images/like.svg" alt="" />
                  </button>
                  <button>
                    <img
                      class="h-5"
                      src="../public/images/comment.svg"
                      alt=""
                    />
                  </button>
                  <button>
                    <img class="h-5" src="../public/images/share.svg" alt="" />
                  </button>
                  <button>
                    <img class="h-5" src="../public/images/save.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
}
</script>
