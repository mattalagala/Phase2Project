
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {products_id: 1, category_id: 1, products_manufacturer: 'Fender', products_model: 'American Professional Stratocaster', products_color: 'Daphne Blue', products_price: '$1,499.99',products_picture: 'https://cdn.shopify.com/s/files/1/1339/6367/products/10149962304_gtr_frt_001_rr_copy_1024x.jpg?v=1570405868',
          product_summary: 'Often copied, but never surpassed, the Stratocaster is arguably the world’s most-loved electric guitar',
          product_description: 'Often copied, but never surpassed, the Stratocaster is arguably the world’s most-loved electric guitar. Electrifying the music world since its debut in 1954, its natural, versatile sound made the Stratocaster the benchmark for exceptional guitar tones. The American Professional Stratocaster isn’t a re-imagining of the classic design; it’s the authentic original model, evolved. The choice of musical legends since its release, the Stratocaster feel and sound set the world on fire, powering music movements from electric blues to EDM, and everything in-between. In your hands this Strat is ready to navigate the creative twists and turns of your music, inspiring you to express yourself in new ways through your playing. Developed by pickup master Tim Shaw, the brand-new V-Mod single-coil pickups are voiced specifically for each position, mixing alnico magnet types to produce powerful, nuanced tones with original Fender sonic DNA. Retain high-end clarity when adjusting the volume controls, thanks to the new treble-bleed tone circuit that lets your tone shine through in all its glory. The new modern “Deep C”-shaped neck profile feels just right in your hand while the narrow-tall frets make it easy to bend strings accurately and play perfectly intonated chords. The best of yesterday and today, the American Professional Stratocaster is the latest form of electric inspiration from Fender. Step up and stake your claim to a legend.'},
        
        {products_id: 2, category_id: 1, products_manufacturer: 'Fender', products_model: 'American Telecaster', products_color: '2-Color Sunburst', products_price: '$1,549.99',products_picture: 'https://media.sweetwater.com/api/i/q-82__ha-abafa53e5b29853f__hmac-192581dcc4e2b5284c300d6b5f10ed55c042f0f9/images/items/750/TeleAPM2SB-large.jpg',
          product_summary: 'Fender is guided by one clear, simple directive: make life better for musicians. While the original Telecaster certainly did that (and then some)',
          product_description: 'Fender is guided by one clear, simple directive: make life better for musicians. While the original Telecaster certainly did that (and then some), they weren’t content to rest on their laurels. Fenders team of mad scientists examined every component in near-microscopic detail. If they were able to improve it with a new design or modern materials, they did; if it didn’t need improvement, they left it alone. When the wood chips and solder fumes settled, what was left was the American Professional Telecaster—everything you need to play your best. Developed by vintage pickup master Tim Shaw, the brand-new V-Mod single-coil pickups are voiced specifically for each position, mixing alnico magnet types to produce powerful, nuanced tones with original Fender sonic DNA. The newly redesigned Telecaster bridge sports three compensated brass barrel saddles for the perfect combination of vintage style with modern feel and performance. Retain high-end clarity when adjusting the volume controls, thanks to the new treble-bleed tone circuit that lets your tone shine through in all its glory. The modern “Deep C”- shaped neck profile feels just right in your hand while the narrow-tall frets make it easy to bend strings accurately and play perfectly intonated chords. The best of yesterday and today, the American Professional Telecaster is the latest form of electric inspiration from Fender. Step up and stake your claim to a legend.'},
        
        {products_id: 3, category_id: 1, products_manufacturer: 'Paul Reed Smith (PRS)',products_model: 'Silver Sky', products_color: 'Dodgem Blue', products_price: '$2,229.99',products_picture: 'https://media.sweetwater.com/api/i/q-82__ha-db1a5ec13a84a9b8__hmac-400b1532eaed4614447767bfdd733c9ddfc22af0/images/items/750/JMSlvSkyDB-large.jpg',
          product_summary: 'The PRS Silver Sky is the result of a close collaboration between Grammy Award-winning musician John Mayer and Paul Reed Smith.',
          product_description: 'The PRS Silver Sky is the result of a close collaboration between Grammy Award-winning musician John Mayer and Paul Reed Smith. More than two and half years in the making, the Silver Sky is a vintage-inspired instrument that is at once familiar, but also newly PRS through and through. This model was based off of Mayer and Smith’s favorite elements from 1963 and 1964 vintage instruments, resulting in an idealized version of a vintage single-coil guitar. The attention that was paid to every detail sets this guitar apart'},
        
        {products_id: 4, category_id: 2, products_manufacturer: 'Martin',products_model: 'D18', products_color: 'Natural', products_price: '$2,499.99', products_picture: 'https://media.sweetwater.com/api/i/f-webp__q-85__ha-286c1685fd14caed__hmac-6cf8452b06b520eb6e3a4891044bfae6d00a8b85/images/items/1800/MD18-xlarge.jpg',
          product_summary: 'The Martin D-18 Standard has a sleek, modern High Performance Neck for enhanced playability.',
          product_description: 'The Martin D-18 Standard has a sleek, modern High Performance Neck for enhanced playability. It features a solid Sitka spruce top for well-balanced tone. The use of solid mahogany for the back and sides further adds to this dreadnoughts precise, clear treble and a warm, moderate bass. This one is made to last a lifetime and is perfect for both the intermediate and advanced player.'},
        
        {products_id: 5, category_id: 2, products_manufacturer: 'Taylor',products_model: 'GS Mini', products_color: 'Koa', products_price: '$799.99', products_picture: 'https://cdn.shopify.com/s/files/1/0916/0836/products/32891_Taylor_GS_Mini-e_Koa_ES-B_1_4000x@2x.progressive.jpg?v=1590695554',
          product_summary: 'There is something undeniably inviting about the Taylor GS Minis scaled-down size, yet a single strum reveals the impressive voice of a full-size guitar.',
          product_description: 'Theres something undeniably inviting about the Taylor GS Minis scaled-down size, yet a single strum reveals the impressive voice of a full-size guitar. That mix of portability and musicality has proven to be a winning combination that fits into so many scenarios in life, from the couch to the campfire to the concert hall. Its not too big. Its not too precious. Its not too expensive. That broad-based accessibility has given it a resounding universal appeal, not to mention a built-in fun factor. The shorter 23-1/2 in. scale length makes forming chords a breeze yet gives the instrument plenty of snap and tuning stability for a rewarding playing experience. The acoustic-electric versions, like this GS Mini-e Koa Acoustic-Electric, come with Taylors reliable ES-B electronics. All GS-Mini models include a durable hard bag built by Taylor for the optimal fit.'},
        
        {products_id: 6, category_id: 2, products_manufacturer: 'Gibson',products_model: 'SJ-200', products_color: 'Natural', products_price: '$5,049.99', products_picture: 'https://images.reverb.com/image/upload/s--gRpKfM7p--/f_auto,t_supersize/v1538148076/f9nueldf23ryg8zrgouh.jpg',
          product_summary: 'The legacy of Gibson’s “King of the Flat-tops” lives on in the SJ-200 Standard acoustic-electric guitar.',
          product_description: 'The legacy of Gibson’s “King of the Flat-tops” lives on in the SJ-200 Standard acoustic-electric guitar. From its inaugural appearance in 1937, Gibson’s SJ-200 became a beloved standard for acoustic players of all genres. The SJ-200 Standard continues a legacy of this world-famous guitar, and comes with some an Antique Natural finish and is complete with the addition of L.R. Baggs Anthem pickup system'},
        
        {products_id: 7, category_id: 3, products_manufacturer: 'Fender',products_model: '65 Deluxe Reverb', products_color: 'Tweed', products_price: '$1,249.99', products_picture: 'https://images.reverb.com/image/upload/s--fCg1vX3B--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1458083848/b87eassgmobzrnygkkyp.jpg',
          product_summary: 'The Fender 22-watt 65 Deluxe Reverb amp in limited-edition tweed and built with pine wood is the perfect amp',
          product_description: 'The Fender 22-watt 65 Deluxe Reverb amp in limited-edition tweed and built with pine wood is the perfect amp for rock, country or blues players who want something moderately powered that can also get cranked up at the gig or in the studio. Combine that with the vintage bite of a 1x12 British-made Celestion G12-65 speaker, and you have got sonic bliss on your hands.'},
        
        {products_id: 8, category_id: 3, products_manufacturer: 'Fender',products_model: 'Blues Junior', products_color: 'Tweed', products_price: '$599.99', products_picture: 'https://media.sweetwater.com/api/i/q-82__ha-edcdfe62662078d4__hmac-c8f6d90cf1d43c92d3ebc233de0eedde98f1f9ee/images/items/750/BluesJrLT-large.jpg',
          product_summary: 'The Blues Jr. NOS takes Fenders 15W gem and gives it the true vintage treatment with tweed covering and a vintage-style',
          product_description: 'The Blues Jr. NOS takes Fenders 15W gem and gives it the true vintage treatment with tweed covering and a vintage-style 12" Jensen speaker. Its power is generated by an all-tube signal path using a pair of EL84 Groove Tube output tubes and 3 - 12AX7 preamp tubes. Add renowned Fender reverb, flexible controls, and footswitchable (with optional footswitch - product #420703) FAT circuit for golden tones, and you are in business. And just look at that chrome panel, that tweed finish with pinstripe grille cloth, and those vintage pointer knobs!'},
        
        {products_id: 9, category_id: 3, products_manufacturer: 'Orange',products_model: 'Crush 35RT', products_color: 'Orange', products_price: '$269.99', products_picture: 'https://cdn.shopify.com/s/files/1/2015/7205/products/Orange_Crush35RTCombo_3_800x.jpg?v=1505313669',
          product_summary: 'The Orange Crush 35RT 35W guitar combo brings the legendary Orange sound to the rehearsal room.',
          product_description: 'he Orange Crush 35RT 35W guitar combo brings the legendary Orange sound to the rehearsal room. Sharing the Crush 20RTs twin-channel design, digital reverb and chromatic tuner, the Crush 35s larger size and bigger output section delivers even greater punch and volume. Complete with a transparent, fully buffered effects loop this amp goes way beyond the call of the traditional "practice amplifier. And, with Oranges CabSim technology, you get an emulated 4x12" cab tone through the headphone output to give you huge sound even when you are practicing silently.'},
        
        {products_id: 10, category_id: 3, products_manufacturer: 'Vox',products_model: 'AC30 2X12', products_color: 'Black', products_price: '$1,399.99', products_picture: 'https://media.sweetwater.com/api/i/q-82__ha-ed5ecf3059ac5eba__hmac-5ef58e68a3624a555831c1895920c2a5b8d96714/images/items/750/V212C-large.jpg',
          product_summary: 'The Vox AC30C2 amp makes use of 3 x 12AX7 preamp tubes and use 4 x EL84 tubes to deliver 30W of power.',
          product_description: 'The Vox AC30C2 amp makes use of 3 x 12AX7 preamp tubes and use 4 x EL84 tubes to deliver 30W of power. It uses 2 - 12" Celestion G12M Greenback speakers, and includes a switchable 8/16 ohm output jack for powering an external speaker cabinet when you need to speak with a little more authority; using this jack will mute the internal speakers. Additionally, the 30W guitar amps 2nd extension speaker jack allows you to run an extra 16-ohm cabinet along with the internal speakers for a fuller sound.'},
        
        {products_id: 11, category_id: 4, products_manufacturer: 'Fender',products_model: 'American Professional Precision Bass 4-String', products_color: '2-Color Sunburst', products_price: '$1,949.99', products_picture: 'https://images.reverb.com/image/upload/s--7kx-EFOM--/f_auto,t_supersize/v1548373958/zwn5agbjsg8afugfwyki.jpg',
          product_summary: 'The Precision Bass was a truly revolutionary instrument when it was released in 1951.',
          product_description: 'The Precision Bass was a truly revolutionary instrument when it was released in 1951. Not only could bassists finally play with perfect intonation, they could be heard along with the rest of the band. From funk to rock, hip-hop to reggae; all of the music that’s enriched our lives began with the thunderous Precision Bass. Developed by longtime bass pickup master Michael Bump, the brand-new V-Mod split-coil Precision Bass pickup uses a carefully selected blend of alnico magnet types for balanced tone with authentic Fender sonic DNA. The “golden” ’63 P Bass neck profile feels just right nestled in your hand, becoming one with you, while the narrow-tall frets provide a familiar playing feel and perfect intonation. Posiflex graphite support rods run the length of the neck, adding stability to the neck while resisting warping. The redesigned tuning machines use a fluted shaft, creating the optimum break angle over the nut while keeping the string windings tight for increased sustain and enhanced tuning stability.'},
        
        {products_id: 12, category_id: 4, products_manufacturer: 'Fender',products_model: 'American Professional Jazz Bass 4-String', products_color: 'Cobra Blue', products_price: '$1,999.99', products_picture: 'https://media.guitarcenter.com/is/image/MMGS7/American-Ultra-Jazz-Bass-Maple-Fingerboard-Cobra-Blue/L69957000001000-00-1200x1200.jpg',
          product_summary: 'The Fender American Ultra Jazz Bass is designed for players who want the most advanced, highest performance Jazz Bass ever made',
          product_description: 'The Fender American Ultra Jazz Bass is designed for players who want the most advanced, highest performance Jazz Bass ever made. The team spent over two years on intense R&D, analyzing and improving everything on this new flagship line. American made in Corona, California, the American Ultra J Bass features new noiseless pickups, advanced electronics, tapered heel and body contours, a redesigned neck profile, a maple fretboard with rolled edges and new stage-ready finishes. It all adds up to a Jazz Bass you’ll never part with. But don’t let these modern updates fool you. The vibe of the American Ultra Series Jazz Bass is still classic Fender.',},
        
        {products_id: 13, category_id: 5, products_manufacturer: 'Ableton',products_model: 'Push 2', products_color: 'Black', products_price: '$799.99', products_picture: 'https://i.pcmag.com/imagery/reviews/026WYE4XN99dDtWflTxyi5l-9.fit_scale.size_1028x578.v_1569472898.jpg',
          product_summary: 'Push is an instrument that puts everything you need to make music in one place—at your fingertips.',
          product_description: 'Push is an instrument that puts everything you need to make music in one place—at your fingertips. Making music is hard. To stay in the flow, you need to be able to capture your ideas quickly, and you need technology to stay out of the way. Computers make it possible for one person to create whole worlds of sound. But instruments are where inspiration comes from. Push gives you the best of everything. It’s a powerful, expressive instrument that gives you hands-on control of an unlimited palette of sounds, without needing to look at a computer. Play or program beats, melodies, and harmonies with Push’s 64 pads. When playing drums, Push’s grid of 64 pads is divided into three sections, allowing you to play in real time, step sequence, and adjust the length of your loop, all at the same time.'},
        
        {products_id: 14, category_id: 5, products_manufacturer: 'Native Instruments',products_model: 'Maschine MK3', products_color: 'Black', products_price: '$649.99', products_picture: 'https://d1aeri3ty3izns.cloudfront.net/media/47/478949/600/preview.jpg',
          product_summary: 'The third-generation MASCHINE controller improves on Native Instruments most popular groove production system with some major new enhancements.',
          product_description: 'The third-generation MASCHINE controller improves on Native Instruments most popular groove production system with some major new enhancements. New in the MK3 version has a built-in audio interface, with pro-grade 24-bit/96kHz audio resolution, two 1/4 in. TRS line outputs, two 1/4 in. TRS line inputs, MIDI In/Out, stereo headphone outputs and more. The other most notable change is the addition of two high-resolution, full-color displays for precision sample slicing, sound tweaking, note editing, mixing, browsing and more. The button and pad layouts have also received a refresh, with an all-new 4-directional push encoder for browsing, navigating and adjusting levels, and a new smart strip for strumming notes, pitch bending sounds, performing with FX, and more. MASCHINE MK3 is ready for seamless control of the latest version of MASCHINE 2 software including everything you need to create and perform songs – with an 8 GB library of high-quality sounds, drum kits, multi-sampled instruments, patterns, projects, and sliced loops right out of the box, plus Drum Synths: 5 fully tweakable, automatable drum plug-ins built exclusively for MASCHINE. MASCHINE MK3 is compatible with all major DAWs (including Ableton Live, Logic Pro, and FL Studio) as a VST or Audio Units plug-in with full multicore support.'},
        
        {products_id: 15, category_id: 5, products_manufacturer: 'Akai Professional',products_model: 'MPC Live II', products_color: 'Black', products_price: '$1,199.99', products_picture: 'https://images.reverb.com/image/upload/s--MlblAZ_O--/f_auto,t_large/v1539099485/fq9rew3xskln468sj5if.png',
          product_summary: 'For the music makers who never want to miss an inspirational moment, meet MPC Live II.',
          product_description: 'MPC Live II is the first MPC with a built-in stereo studio monitoring speaker system. Designed from the ground up, this dual tweeter-woofer system delivers impeccable clarity to keep your ideas flowing through the creative process. Hear every detail of your production - rumbling 808s, the unmistakable punch of kick drums, thunderous bass lines, and a crisp, silky high-end. Need a second perspective? Turn off the built-in monitors, hook up your studio speakers and you’re set.'},
        
        {products_id: 16, category_id: 1, products_manufacturer: 'Gibson',products_model: 'ES-335', products_color: 'Satin Vintage Burst', products_price: '$2,599.99', products_picture: 'https://cdn.shopify.com/s/files/1/0916/0836/products/39451_Gibson_ES-335_120790208_1_4000x@3x.progressive.jpg?v=1584393222',
          product_summary: 'The Gibson ES-335 DOT is the cornerstone of the Gibson ES lineup. From its inaugural appearance in 1958',
          product_description: 'The Gibson ES-335 DOT is the cornerstone of the Gibson ES lineup. From its inaugural appearance in 1958, the Gibson ES-335 immediately set an unmatched standard. The pearloid dot inlay rosewood fingerboard on a hand-rolled Rounded "C" mahogany neck remind players where it all started. The all-new Gibson Calibrated T-Type humbucking pickups paired with Gibsons hand-wired control assembly showcases the versatile Gibson ES tone that players have craved for over 60 years. Tuning stability and precise intonation are provided by the Vintage Deluxe tuners with Keystone buttons paired with a lightweight Aluminum ABR-1 bridge and stopbar tailpiece.'},
       
      ]);
    });
};
