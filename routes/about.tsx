export default function About() {
  return (
    <div class="text-shadow min-h-screen w-full bg-pink-300 p-2 text-lg leading-8 text-red-100">
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <div class="flex w-full items-center p-2">
          <a class="flex-1" href="/">
            <img src="/logo.png" class="h-12 w-12" />
          </a>
        </div>
        <div class="max-auto mt-8 max-w-lg leading-8 text-gray-900">
          <div class="text-lg text-gray-500">关于本站</div>
          <div class="my-4">本游戏由：破姐应用库 出品</div>
          <div>无需会员</div>
          <div>免费畅玩情侣升温小游戏</div>
          <div>请添加官方客服：ZJBBNB</div>
          <div class="mt-4">
            如需其他好玩的软件，请关注公众号：破姐应用库
            <a href="/custom" class="underline">
              如何制作一个相同的网站赚钱
            </a>
          </div>
        </div>
        <div>
          <img src="/qrcode.JPG" class="my-4 max-w-xs rounded-lg" />
        </div>
      </div>
    </div>
  );
}
