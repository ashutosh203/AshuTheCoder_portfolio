
const FooterSection = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 mt-20 glass-effect">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {year} Ashutosh kumar shah. All Rights Reserved.</p>
        <p className="text-sm mt-2">Designed and built with ❤️</p>
      </div>
    </footer>
  );
}

export default FooterSection
