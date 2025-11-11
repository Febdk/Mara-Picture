import { useState, useEffect } from "react";
import { galleries, Gallery, GalleryImage } from "../data/mockData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Search,
  FolderOpen,
  ArrowLeft,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";
import Masonry from "react-responsive-masonry";

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Scroll to top when gallery is opened
  useEffect(() => {
    if (selectedGallery && !selectedImage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedGallery, selectedImage]);

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(galleries.map((g) => g.category))),
  ];

  // Filter galleries
  const filteredGalleries = galleries.filter((gallery) => {
    const matchesCategory =
      selectedCategory === "All" || gallery.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      gallery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gallery.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gallery.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Open gallery folder
  const openGallery = (gallery: Gallery) => {
    setSelectedGallery(gallery);
  };

  // Close gallery folder
  const closeGallery = () => {
    setSelectedGallery(null);
    setSelectedImage(null);
  };

  // Open image lightbox
  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate between images
  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedGallery) return;

    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % selectedGallery.images.length
        : (currentImageIndex - 1 + selectedGallery.images.length) %
          selectedGallery.images.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(selectedGallery.images[newIndex]);
  };

  // If gallery is selected, show full page view
  if (selectedGallery && !selectedImage) {
    return (
      <div className="min-h-screen bg-white">
        {/* Gallery Header - Sticky */}
        <div className="sticky top-0 z-40 bg-white border-b-4 border-black shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <Button
                onClick={closeGallery}
                variant="ghost"
                className="hover:bg-black/10 border-2 border-black"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Galleries
              </Button>
              <Button
                onClick={closeGallery}
                variant="ghost"
                size="icon"
                className="hover:bg-black/10"
              >
                <X size={28} className="text-black" />
              </Button>
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl mb-3 text-black">
                {selectedGallery.name}
              </h1>
              <p className="text-black/70 text-lg mb-3">
                Client: {selectedGallery.client}
              </p>
              <p className="text-black/70 mb-4 max-w-3xl leading-relaxed">
                {selectedGallery.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                <Badge className="bg-black text-white border-2 border-black px-4 py-2">
                  {selectedGallery.category}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-black text-black px-4 py-2"
                >
                  {new Date(selectedGallery.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-black text-black px-4 py-2"
                >
                  {selectedGallery.images.length} Photos
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Gallery Layout */}
        <div className="container mx-auto px-4 py-8">
          <Masonry columnsCount={2} gutter="16px">
            {selectedGallery.images.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative overflow-hidden cursor-pointer group border-4 border-black shadow-xl hover:shadow-2xl"
                onClick={() => openLightbox(image, index)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-lg mb-1">{image.alt}</p>
                    <p className="text-white/80 text-sm">
                      Click to view full size
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-black"
            size={20}
          />
          <Input
            type="text"
            placeholder="Cari gallery, client, atau deskripsi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-2 border-black focus:border-black bg-white text-black"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-black text-white border-2 border-black"
                  : "border-2 border-black text-black hover:bg-black hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-center text-black">
        Menampilkan {filteredGalleries.length} gallery
      </div>

      {/* Gallery Folders Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredGalleries.map((gallery, index) => (
          <motion.div
            key={gallery.id}
            className="group cursor-pointer bg-white border-2 border-black overflow-hidden hover:shadow-2xl transition-all duration-300"
            onClick={() => openGallery(gallery)}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Cover Image */}
            <div className="relative aspect-video overflow-hidden">
              <ImageWithFallback
                src={gallery.coverImage}
                alt={gallery.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FolderOpen className="text-white" size={48} />
              </div>
              <Badge className="absolute top-3 right-3 bg-black text-white border-2 border-white">
                {gallery.images.length} foto
              </Badge>
            </div>

            {/* Gallery Info */}
            <div className="p-4 bg-white">
              <h3 className="mb-2 line-clamp-1 text-black">{gallery.name}</h3>
              <p className="text-black/70 mb-2">Client: {gallery.client}</p>
              <p className="text-black/60 text-sm line-clamp-2 mb-3">
                {gallery.description}
              </p>
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="border-2 border-black text-black"
                >
                  {gallery.category}
                </Badge>
                <span className="text-sm text-black/60">
                  {new Date(gallery.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredGalleries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-black/60">Tidak ada gallery yang ditemukan</p>
        </div>
      )}

      {/* Image Lightbox Modal - Full Screen dengan Zoom */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-4 border-white">
          {selectedImage && selectedGallery && (
            <>
              <DialogTitle className="sr-only">
                Image {currentImageIndex + 1} of {selectedGallery.images.length}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {selectedImage.alt}
              </DialogDescription>
              <div className="relative h-[95vh] flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-20 text-white hover:bg-white/30 w-12 h-12 border-2 border-white/50 backdrop-blur-sm"
                  onClick={closeLightbox}
                >
                  <X size={28} />
                </Button>

                {/* Navigation Buttons */}
                {selectedGallery.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/30 w-16 h-16 border-2 border-white/50 backdrop-blur-sm"
                      onClick={() => navigateImage("prev")}
                    >
                      <ChevronLeft size={40} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/30 w-16 h-16 border-2 border-white/50 backdrop-blur-sm"
                      onClick={() => navigateImage("next")}
                    >
                      <ChevronRight size={40} />
                    </Button>
                  </>
                )}

                {/* Image Container with Auto-fit */}
                <div className="w-full h-full flex items-center justify-center p-4">
                  <ImageWithFallback
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-8 z-10">
                  <div className="container mx-auto">
                    <Badge className="bg-white text-black mb-3 px-4 py-2">
                      {selectedGallery.category}
                    </Badge>
                    <p className="text-white text-xl mb-2">
                      {selectedImage.alt}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-white/80">{selectedGallery.name}</p>
                      <p className="text-white/80">
                        {currentImageIndex + 1} /{" "}
                        {selectedGallery.images.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
