const Footer = () => {
    return (
        <div className=" text-tersier-3">
            <div className="bg-primary-theme ">
                <div className="container mx-auto grid gap-4 grid-cols-2 md:flex md:flex-row md:justify-between  px-5 pt-5 pb-[50px] md:pt-[50px]  md:px-20">
                <div className="space-y-3" >
                    <div  className="font-bold text-sm md:text-base">Mino Store</div>                  
                    <div className="text-body-small md:text-sm" >Yogyakarta</div>
                    <div  className="text-body-small md:text-sm">Kebumen</div>
                    <div  className="text-body-small md:text-sm">Purwokerto</div>
                    <div  className="text-body-small md:text-sm">Kudus</div>              
                    </div >
                   

                <div>
                <div className="space-y-3" >
                <div  className="font-bold text-sm md:text-base">Belanja</div>
                    <div  className="text-body-small md:text-sm">Sepatu Pria</div>
                    <div  className="text-body-small md:text-sm">Sepatu Wanita</div>
                    <div  className="text-body-small md:text-sm">Sepatu Uniseks</div>
                    <div  className="text-body-small md:text-sm">Pernak-pernik</div> 
                    <div className="text-body-small md:text-sm">Aksesoris</div>
                </div>
                </div>
                

                <div className="space-y-3"> 
                <div  className="font-bold text-sm md:text-base">Layanan</div>
                    <div  className="text-body-small md:text-sm">Bantuan</div>
                    <div  className="text-body-small md:text-sm">Cara Pengembalian</div>
                    <div  className="text-body-small md:text-sm">Indeks Produk</div>
                    <div  className="text-body-small md:text-sm">Promo & Diskon</div> 
                    <div  className="text-body-small md:text-sm">Konfirmasi Transfer</div>
                    <div  className="text-body-small md:text-sm">Status Pesanan</div>
                </div>

                <div className="space-y-3">
                <div className="font-bold text-sm md:text-base">Tentang Kami</div>
                    <div  className="text-body-small md:text-sm">Tentang Kami</div>
                    <div  className="text-body-small md:text-sm">Pers / Media</div>
                    <div  className="text-body-small md:text-sm">Karir</div>
                    <div className="text-body-small md:text-sm">Persyaratan & Ketentuan</div> 
                    <div  className="text-body-small md:text-sm">Kebijakan Privasi</div>
                    <div className="text-body-small md:text-sm">Hubungi Kami</div>
                </div>
                </div>
              
            </div>

            <div className="bg-secondary-theme flex justify-center items-center text-xs font-bold leading-4 py-3 ">
            <div>(c) 2020 CV. MinoStore Minomartani</div> 
            </div> 
 
        </div> 
    );
}; 

export default Footer;