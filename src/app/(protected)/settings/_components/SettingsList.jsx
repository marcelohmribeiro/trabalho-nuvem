const settings = [
  {
    title: "Configurações do jogo",
    items: [
      {
        icon: "🔊",
        name: "Som",
        description: "Ative/desative os efeitos sonoros e a música do jogo.",
      },
    ],
  },
  {
    title: "Appearance",
    items: [
      {
        icon: "☀️",
        name: "Tema",
        description: "Alterne entre o modo claro e o modo escuro.",
      },
    ],
  },
];

export default function SettingsList() {
  return (
    <>
      {settings.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-xl font-bold text-amber-900 mb-4">
            {section.title}
          </h2>
          <div className="space-y-3">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold text-amber-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-amber-700">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
