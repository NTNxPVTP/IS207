export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <div className="rounded-lg border p-8">
        <h3 className="text-lg font-medium">Application Settings</h3>
        <p className="text-sm text-muted-foreground mt-2">Configure your store settings and preferences here.</p>
      </div>
    </div>
  )
}
