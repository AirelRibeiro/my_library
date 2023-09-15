export default function Text({ text }: any) {
  return (
    <h2 className="text-base md:text-2xl px-5 md:px-0 font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-justify md:text-center sm:w-2/3">
      {text}
    </h2>
  );
}
