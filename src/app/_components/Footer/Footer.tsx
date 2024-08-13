export default function Footer() {
  return (
    <div className="p-12 pb-6 bg-black ">
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
        <div className="flex flex-col justify-center items-center gap-10">
          <div>
            <img src="/logo-white.svg" alt="logo" />
          </div>

          <p className="text-white  text-center">
            "Vielmehr seid ihr zu dem Berg Zion gekommen und der Stadt des
            lebendigen Gottes, dem himmlischen Jerusalem ..." (Hebr. 12:22). Die
            Gemeinde, in der unser Gott und Vater angebetet werden möchte, ist
            nicht nur eine Versammlung von Christen mit einem bestimmten Namen.
            Wir haben den Wunsch, heute das himmlische Jerusalem zu sein und
            dort unseren Vater-Gott im Geist und in der Wirklichkeit anzubeten.
            Alle, die diesen Wunsch mit uns teilen, sind herzlich eingeladen!
          </p>

          <div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-between text-white flex-grow w-full">
            <p className="text-center">Copyright 2024 </p>
            <div>
              <ul className="flex md:flex-row flex-col gap-6 justify-center items-center">
                <li>Imprint</li>
                <li>Data protection</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
