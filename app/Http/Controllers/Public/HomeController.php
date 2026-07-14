<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('public/index', [
            'hero' => [
                'imageId' => '1487730116645-74489c95b41b',
                'eyebrow' => 'Lereng Gunung Arjuno · 800 MDPL',
                'title' => 'Di Balik <em>Kabut</em>, Temukan Hening.',
                'description' => 'Lepaskan bising kota di pelukan lereng Gunung Arjuno. Temukan harmoni petualangan rimba dan kenyamanan kabin premium di bawah hamparan langit bertabur bintang.',
                'price' => 'Rp35.000',
                'stats' => [
                    'spots' => '40+ Spot Camp',
                    'units' => '18 Unit Mewah',
                    'rating' => '4.8 / 5.0 Rating',
                ],
            ],
            'categories' => [
                [
                    'id' => 'campground',
                    'title' => 'Camp Ground',
                    'description' => 'Sewa kapling lahan premium untuk tenda pribadi Anda. Dilengkapi akses air bersih melimpah, toilet higienis, dan area api unggun komunal.',
                ],
                [
                    'id' => 'accommodation',
                    'title' => 'Cabin & Glamping',
                    'description' => 'Kombinasi kemewahan dan alam liar. Nikmati glamping dome atau kabin kayu rustic dengan fasilitas kasur empuk, listrik, dan air hangat.',
                ],
                [
                    'id' => 'equipment',
                    'title' => 'Sewa Alat',
                    'description' => 'Tak perlu repot membawa peralatan dari rumah. Kami menyewakan tenda waterproof, sleeping bag hangat, alat masak, hingga paket camping lengkap siap pakai.',
                ],
                [
                    'id' => 'restaurant',
                    'title' => 'Restoran',
                    'description' => 'Sajian hidangan khas lereng gunung dan paket bakar-bakaran hangat. Menemani santap santai Anda di tengah sejuknya udara malam pegunungan.',
                ],
            ],
            'packages' => [
                'campground' => [
                    [
                        'imageId' => '1598417136294-7c1c4c94931f',
                        'tag' => 'Kawasan Lahan Utama',
                        'title' => 'Lahan Reguler',
                        'price' => 'Rp35.000',
                        'specs' => [
                            'Fasilitas Toilet & Air Bersih 24 Jam',
                            'Akses Area Api Unggun Komunal',
                            'Area Parkir Kendaraan yang Luas',
                        ],
                    ],
                    [
                        'imageId' => '1564577160324-112d603f750f',
                        'tag' => 'Lokasi Eksklusif',
                        'title' => 'Lahan Privat Tepi Sungai',
                        'price' => 'Rp75.000',
                        'specs' => [
                            'Spot Kemah Privat Tepat di Tepi Aliran Sungai',
                            'Fasilitas Api Unggun Pribadi Tiap Kapling',
                            'Dibatasi Maksimal 1 Kelompok per Area',
                        ],
                    ],
                    [
                        'imageId' => '1533873984035-25970ab07461',
                        'tag' => 'Kemah Grup & Gathering',
                        'title' => 'Paket Rombongan (Min. 20 Orang)',
                        'price' => 'Rp30.000',
                        'specs' => [
                            'Tarif Khusus untuk Kegiatan Komunitas/Kantor',
                            'Kawasan Lapang untuk Outbound & Gathering',
                            'Termasuk Gratis Fasilitas Tenda Dome Besar',
                        ],
                    ],
                ],
                'accommodation' => [
                    [
                        'imageId' => '1704748203439-3d273389aa4e',
                        'tag' => 'Glamping Dome Estetik',
                        'title' => 'Glamping Dome',
                        'price' => 'Rp450.000',
                        'unit' => '/ malam · 2 org',
                        'specs' => [
                            'Kasur Queen Size Empuk & Colokan Listrik 24 Jam',
                            'Kamar Mandi Privat dengan Shower Air Hangat',
                            'Teras Bersantai Pribadi Menghadap Langsung ke Lembah',
                        ],
                    ],
                    [
                        'imageId' => '1762158866005-dea9eae24c45',
                        'tag' => 'Kabin Kayu Rustic',
                        'title' => 'Cabin Kayu Keluarga',
                        'price' => 'Rp650.000',
                        'unit' => '/ malam · 4 org',
                        'specs' => [
                            'Kabin Kayu Hangat dengan 2 Kasur Keluarga & Ruang Santai',
                            'Fasilitas Kamar Mandi Dalam yang Bersih & Privat',
                            'Lokasi Strategis Dekat dengan Area Restoran & Kedai',
                        ],
                    ],
                    [
                        'imageId' => '1449844908441-8829872d2607',
                        'tag' => 'Villa Hutan Mewah',
                        'title' => 'Villa Puncak',
                        'price' => 'Rp1.200.000',
                        'unit' => '/ malam · 6 org',
                        'specs' => [
                            'Villa 2 Lantai Megah dengan Dapur Mini & Peralatan Lengkap',
                            'Balkon Bersantai dengan Pemandangan 360 Derajat Lereng Gunung',
                            'Termasuk Paket Sarapan Pagi Lezat untuk 6 Orang',
                        ],
                    ],
                ],
                'equipment' => [
                    'tent' => [
                        [
                            'imageId' => '1633805159007-8e198bbcc931',
                            'badge' => '',
                            'name' => 'Monodome Pro',
                            'capacity' => 'Kapasitas 2–3 Orang',
                            'specs' => [
                                'Bobot Super Ringan: 1,6 kg',
                                'Frame Fiber Lentur Tahan Angin',
                                'Poliester Tahan Air (Waterproof) PU 2000 mm',
                            ],
                            'price' => 'Rp30.000',
                            'originalPrice' => '',
                        ],
                        [
                            'imageId' => '1565578151233-45758846ae9a',
                            'badge' => 'Promo',
                            'name' => 'Bestway Montana Pavillo X4',
                            'capacity' => 'Kapasitas 4–5 Orang',
                            'specs' => [
                                'Bobot Kokoh & Stabil: 4,1 kg',
                                'Rangka Frame Fiber Ekstra Kuat',
                                'Poliester dengan Lapisan PU Tahan Rembes',
                            ],
                            'price' => 'Rp40.000',
                            'originalPrice' => 'Rp45.000',
                        ],
                        [
                            'imageId' => '1629899666444-b9653b757ac6',
                            'badge' => 'Promo',
                            'name' => 'Tendaki Borneo 4 Orange',
                            'capacity' => 'Kapasitas 4–5 Orang',
                            'specs' => [
                                'Bobot Stabil: 4,1 kg',
                                'Frame Fiber Fleksibel Tahan Badai',
                                'Poliester PU 2500 mm (Full Seam Tape)',
                            ],
                            'price' => 'Rp40.000',
                            'originalPrice' => 'Rp45.000',
                        ],
                        [
                            'imageId' => '1623083615548-03a883203a2c',
                            'badge' => 'Promo',
                            'name' => 'Great Outdoor Java 4 Pro',
                            'capacity' => 'Kapasitas 4–6 Orang',
                            'specs' => [
                                'Bobot: 4,1 kg',
                                'Rangka Frame Fiber Premium Tebal',
                                'Poliester Ripstop PU 3000 mm',
                            ],
                            'price' => 'Rp45.000',
                            'originalPrice' => 'Rp50.000',
                        ],
                    ],
                    'package' => [
                        [
                            'name' => 'Paket Alat Memasak',
                            'description' => 'Kompor portable tipe koper, tabung gas baru, cooking set panci & wajan serbaguna, serta set piring & gelas stainless.',
                            'price' => 'Rp40.000',
                        ],
                        [
                            'name' => 'Paket Solo Traveler',
                            'description' => 'Tenda double layer (kapasitas 2-3 orang) dilengkapi 1 sleeping bag hangat, 1 matras busa spon, dan 1 senter kepala.',
                            'price' => 'Rp45.000',
                        ],
                        [
                            'name' => 'Paket Duo Adventure',
                            'description' => 'Tenda double layer (kapasitas 2-3 orang) dilengkapi 2 sleeping bag hangat, 2 matras busa spon, dan 1 lampu gantung tenda.',
                            'price' => 'Rp60.000',
                        ],
                        [
                            'name' => 'Paket Keluarga Inti',
                            'description' => 'Tenda double layer (kapasitas 4-5 orang) dilengkapi 3 sleeping bag hangat, 3 matras busa spon, 1 lampu gantung tenda, dan 1 meja lipat kain.',
                            'price' => 'Rp90.000',
                        ],
                        [
                            'name' => 'Paket Keluarga Besar',
                            'description' => 'Tenda double layer (kapasitas 4-5 orang) dilengkapi 4 sleeping bag hangat, 4 matras busa spon, 1 lampu tenda, 1 meja lipat aluminium, dan 2 kursi lipat premium.',
                            'price' => 'Rp130.000',
                        ],
                        [
                            'name' => 'Paket Camping All-in-One',
                            'description' => 'Tenda besar (4-5 orang), 4 sleeping bag & matras, lampu gantung, kompor portable & gas, cooking set lengkap, set piring & gelas, meja aluminium, 4 kursi lipat premium, dan hammock.',
                            'price' => 'Rp235.000',
                            'isHighlighted' => true,
                        ],
                    ],
                    'individual' => [
                        'comfort' => [
                            ['name' => 'Matras Spon', 'price' => 'Rp5.000'],
                            ['name' => 'Sleeping Bag Hangat', 'price' => 'Rp10.000'],
                            ['name' => 'Matras Aluminium Foil', 'price' => 'Rp12.000'],
                            ['name' => 'Bantal Angin Tiup', 'price' => 'Rp5.000'],
                            ['name' => 'Lampu Tenda LED', 'price' => 'Rp5.000'],
                            ['name' => 'Headlamp / Senter Kepala', 'price' => 'Rp5.000'],
                        ],
                        'kitchen' => [
                            ['name' => 'Kompor Portable Koper', 'price' => 'Rp17.000'],
                            ['name' => 'Refill Gas Portable', 'price' => 'Rp8.000'],
                            ['name' => 'Gas Portable Baru (Beli)', 'price' => 'Rp23.000'],
                            ['name' => 'Cooking Set (Panci + Wajan)', 'price' => 'Rp12.000'],
                            ['name' => 'Teko Camping (Air Panas)', 'price' => 'Rp8.000'],
                            ['name' => 'Set Piring & Gelas Stainless', 'price' => 'Rp5.000'],
                        ],
                        'furniture' => [
                            ['name' => 'Meja Lipat Aluminium', 'price' => 'Rp20.000'],
                            ['name' => 'Kursi Lipat Premium', 'price' => 'Rp12.000'],
                            ['name' => 'Flysheet Pelindung 3×4', 'price' => 'Rp15.000'],
                            ['name' => 'Terpal Alas Duduk 3×3', 'price' => 'Rp10.000'],
                            ['name' => 'Hammock (Tempat Tidur Gantung)', 'price' => 'Rp10.000'],
                        ],
                    ],
                ],
                'restaurant' => [
                    'package' => [
                        [
                            'imageId' => '1695091614540-5a5be276a0d6',
                            'tag' => '2 Orang',
                            'title' => 'Paket Grill Small',
                            'price' => 'Rp105.000',
                            'unit' => '/ paket',
                            'specs' => [
                                '250 gr Beef Slice, Chicken Steak & Sosis Sapi',
                                'Jagung Manis, Paprika, Bawang Bombay & Jamur',
                                'Saus Blackpepper, BBQ & Bumbu Marinasi',
                            ],
                        ],
                        [
                            'imageId' => '1695091614540-5a5be276a0d6',
                            'tag' => '4 Orang',
                            'title' => 'Paket Grill Medium',
                            'price' => 'Rp195.000',
                            'unit' => '/ paket',
                            'specs' => [
                                '500 gr Beef Slice, Chicken Steak, Sosis & Bakso Sapi',
                                'Jagung Manis, Paprika, Bawang Bombay & Jamur',
                                'Saus Blackpepper, BBQ & Bumbu Marinasi Lengkap',
                            ],
                        ],
                        [
                            'imageId' => '1695091614540-5a5be276a0d6',
                            'tag' => '6 Orang',
                            'title' => 'Paket Grill Large',
                            'price' => 'Rp285.000',
                            'unit' => '/ paket',
                            'specs' => [
                                '750 gr Beef Slice, Chicken Steak, Sosis, Bakso & Aneka Sayuran',
                                'Jagung Manis, Paprika, Bawang Bombay, Jamur & Pelengkap',
                                'Saus Blackpepper, BBQ & Bumbu Marinasi Lengkap',
                            ],
                        ],
                        [
                            'imageId' => '1695091614540-5a5be276a0d6',
                            'tag' => 'Custom',
                            'title' => 'Paket Grill Custom',
                            'price' => 'Hubungi Kami',
                            'unit' => '',
                            'specs' => [
                                'Pilih Sendiri Jenis Daging, Seafood, Sayuran & Pelengkap',
                                'Jumlah Porsi Dapat Disesuaikan',
                                'Cocok untuk Gathering, Family Camping & Komunitas',
                            ],
                        ],
                    ],
                    'food' => [
                        ['name' => 'Nasi Goreng Rimba', 'description' => 'Nasi goreng khas gunung dengan telur mata sapi dan acar', 'price' => 'Rp20.000'],
                        ['name' => 'Mie Rebus/Goreng Telur', 'description' => 'Mie instan hangat dengan telur, kol, dan cabai iris', 'price' => 'Rp12.000'],
                        ['name' => 'Sate Ayam Lereng Arjuno', 'description' => '10 tusuk sate ayam dengan saus kacang legit khas lokal', 'price' => 'Rp25.000'],
                        ['name' => 'Pisang Bakar Cokelat Keju', 'description' => 'Pisang kepok bakar manis berlimpah parutan keju & meses', 'price' => 'Rp15.000'],
                        ['name' => 'Kentang Goreng Hutan', 'description' => 'Camilan kentang renyah dengan taburan garam & saus sambal', 'price' => 'Rp15.000'],
                        ['name' => 'Roti Bakar Cokelat/Keju', 'description' => 'Roti panggang mentega tebal dengan susu kental manis', 'price' => 'Rp12.000'],
                    ],
                    'hotDrinks' => [
                        ['name' => 'Kopi Hitam Arjuno', 'description' => 'Kopi Robusta lokal lereng Arjuno seduh tradisional', 'price' => 'Rp8.000'],
                        ['name' => 'Kopi Susu Rimba', 'description' => 'Kopi Robusta Arjuno dengan perpaduan susu manis lembut', 'price' => 'Rp10.000'],
                        ['name' => 'Susu Jahe Hangat', 'description' => 'Susu putih hangat dipadu dengan jahe geprek segar', 'price' => 'Rp12.000'],
                        ['name' => 'Wedang Jahe Hangat', 'description' => 'Jahe merah bakar murni pembakar dinginnya gunung', 'price' => 'Rp10.000'],
                        ['name' => 'Teh Manis Hangat', 'description' => 'Teh melati wangi diseduh hangat beraroma menenangkan', 'price' => 'Rp5.000'],
                    ],
                    'coldDrinks' => [
                        ['name' => 'Soda Gembira Rimba', 'description' => 'Sirup cocopandan, susu manis, air soda, dan es batu', 'price' => 'Rp15.000'],
                        ['name' => 'Es Kopi Susu Rimba', 'description' => 'Es kopi Robusta susu Arjuno dingin menyegarkan', 'price' => 'Rp12.000'],
                        ['name' => 'Es Jeruk Peras', 'description' => 'Perasan jeruk lokal segar disajikan dingin dengan es', 'price' => 'Rp10.000'],
                        ['name' => 'Es Teh Manis', 'description' => 'Teh melati manis disajikan dingin dengan es batu segar', 'price' => 'Rp6.000'],
                        ['name' => 'Air Mineral Dingin', 'description' => 'Air mineral kemasan botol dingin segar dari pegunungan', 'price' => 'Rp5.000'],
                    ],
                ],
            ],
            'gallery' => [
                'backgroundImageId' => '1441974231531-c6227db76b6e',
                'items' => [
                    ['colSpan' => 'md:col-span-2 md:row-span-2', 'imageId' => '1613487700156-bbde37f69132', 'label' => 'Kawasan Berkemah Utama'],
                    ['colSpan' => 'md:col-span-2', 'imageId' => '1626829282200-83d4ddc82782', 'label' => 'Fajar Hangat di Teras Kabin'],
                    ['colSpan' => 'md:col-span-1', 'imageId' => '1646912951442-7a2bc5e8cd06', 'label' => 'Hangatnya Cengkerama Api Unggun'],
                    ['colSpan' => 'md:col-span-1', 'imageId' => '1650768673967-9f3bde5f90ef', 'label' => 'Kenyamanan di Dalam Glamping'],
                    ['colSpan' => 'md:col-span-2', 'imageId' => '1544025162-d76694265947', 'label' => 'Sajian Hangat Kedai Rimba'],
                    ['colSpan' => 'md:col-span-2', 'imageId' => '1634206813008-d1c2b828c7fd', 'label' => 'Tenangnya Aliran Sungai Arjuno'],
                ],
            ],
            'facilities' => [
                'Toilet & Kamar Mandi Bilas Bersih',
                'Mushala Kayu yang Tenang',
                'Area Parkir Kendaraan Luas & Aman',
                'Sambungan Listrik di Dekat Spot Kemah',
                'Sinyal Seluler Stabil & Wi-Fi Area Resto',
                'Area Bermain Outdoor & Ramah Anak',
                'Kedai Makanan & Resto Bakar Lokal',
                'Kawasan Ramah Hewan Peliharaan (Pet Friendly)',
            ],
            'location' => [
                'mapsEmbedUrl' => 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2688.6084411484635!2d112.6563936291797!3d-7.742851241944796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1783713415490!5m2!1sid!2sid',
                'items' => [
                    ['label' => 'Alamat', 'value' => 'Terrava Camp, Gamoh, Dayurejo, Kec. Prigen, Pasuruan, Jawa Timur 67157.'],
                    ['label' => 'Waktu Tempuh', 'value' => 'Sekitar 60 menit berkendara dari Kota Malang, atau 1,5 jam perjalanan dari Kota Surabaya.'],
                    ['label' => 'Kondisi Jalan', 'value' => 'Akses jalan aspal berliku namun mulus, aman dilalui oleh motor, mobil sedan, hingga minibus keluarga langsung sampai gerbang utama.'],
                ],
            ],
            'contact' => [
                'whatsappUrl' => 'https://wa.me/6285156109600?text=Halo%20Terrava%20Camp,%20saya%20ingin%20tanya%20mengenai%20ketersediaan%20lahan%20dan%20melakukan%20booking',
            ],
            'bookingSteps' => [
                ['title' => 'Pilih Paket', 'description' => 'Tentukan jenis lahan kemah, tipe kabin/glamping, peralatan tambahan, serta pesanan makanan yang Anda inginkan.'],
                ['title' => 'Cek Tanggal', 'description' => 'Hubungi layanan pelanggan kami via WhatsApp untuk memeriksa ketersediaan slot tanggal liburan Anda.'],
                ['title' => 'Bayar DP', 'description' => 'Lakukan transfer DP minimal 50% untuk mengunci reservasi, sisanya dapat dilunasi saat check-in.'],
                ['title' => 'Datang & Check-in', 'description' => 'Tunjukkan bukti reservasi WhatsApp di pos penjagaan pintu masuk Terrava Camp. Selamat menikmati petualangan Anda!'],
            ],
            'faqs' => [
                [
                    'question' => 'Apakah wajib menyewa peralatan camping di lokasi?',
                    'answer' => 'Tidak wajib. Anda bebas membawa tenda dan perlengkapan pribadi Anda sendiri dari rumah (hanya perlu menyewa lahan kapling). Namun jika ingin praktis, kami menyediakan persewaan alat eceran dan paket lengkap siap pakai.',
                ],
                [
                    'question' => 'Bagaimana jika cuaca buruk atau hujan lebat?',
                    'answer' => 'Tenda sewaan kami berspesifikasi double layer waterproof tahan hujan deras. Kami juga menyediakan area pendopo komunal tertutup untuk berteduh darurat, dan Anda diperbolehkan meningkatkan kelas penginapan ke kabin atau glamping jika ada unit kosong.',
                ],
                [
                    'question' => 'Apakah tersedia fasilitas listrik dan akses internet?',
                    'answer' => 'Kami menyediakan terminal listrik bersama di dekat kapling camp utama (disarankan membawa kabel perpanjangan sendiri). Sinyal seluler 4G cukup baik untuk beberapa operator seluler utama, dan kami menyediakan akses Wi-Fi gratis di area restoran/kedai.',
                ],
                [
                    'question' => 'Apakah diperbolehkan membawa hewan peliharaan ke perkemahan?',
                    'answer' => 'Ya, Terrava Camp adalah kawasan ramah hewan peliharaan (Pet Friendly). Demi kenyamanan sesama pengunjung, kami meminta Anda untuk selalu mengawasi hewan peliharaan Anda dan menjaga kebersihan area camp dari kotoran.',
                ],
            ],
            'testimonials' => [
                [
                    'name' => 'Bhre Sudjiwo',
                    'role' => 'Family Camper',
                    'avatar' => '1500648767791-00dcc994a43e',
                    'quote' => 'Pengalaman berkemah terbaik bersama keluarga. Fasilitas toiletnya sangat bersih dan kabin kayunya sangat hangat. Pemandangan fajar Gunung Arjuno dari teras kabin benar-benar luar biasa indah!',
                    'rating' => 5,
                ],
                [
                    'name' => 'Govinda Rumi',
                    'role' => 'Solo Adventurer',
                    'avatar' => '1507003211169-0a1dd7228f2d',
                    'quote' => 'Pemandangannya luar biasa dan suasananya sangat menenangkan. Area camping bersih, fasilitas terawat, dan stafnya ramah. Hanya saja sinyal beberapa operator seluler masih kurang stabil di beberapa titik.',
                    'rating' => 4,
                ],
                [
                    'name' => 'Rania Yamin',
                    'role' => 'Nature & Yoga Enthusiast',
                    'avatar' => '1494790108377-be9c29b29330',
                    'quote' => 'Glamping Dome-nya sangat mewah dan estetik! Suasana tepian sungai Arjuno begitu menenangkan, sangat cocok untuk healing dan yoga pagi hari. Stafnya juga ramah dan sigap membantu.',
                    'rating' => 5,
                ],
            ],
        ]);
    }
}
