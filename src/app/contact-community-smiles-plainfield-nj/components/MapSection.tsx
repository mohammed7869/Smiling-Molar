export default function MapSection() {
  return (
    <section className="w-full bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.88156681386!2d-74.4101914!3d40.6104366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b94a401bb39b%3A0xab3665a251b45a35!2sSmiling%20Molar%20Dental!5e0!3m2!1sen!2sin!4v1760968474950!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Smiling Molar Dental Location"
            className="w-full h-full"
          />
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Use ctrl + scroll to zoom the map
          </p>
        </div>
      </div>
    </section>
  );
}
