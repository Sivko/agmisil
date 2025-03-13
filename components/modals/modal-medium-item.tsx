export default function ModalMediumItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" data-close="true">
      <div className="mx-auto bg-background max-w-full w-[1050px] rounded p-4 max-h-[90dvh] overflow-y-auto max-md:rounded-b-none">
        {children}
      </div>
    </div>
  );
}
