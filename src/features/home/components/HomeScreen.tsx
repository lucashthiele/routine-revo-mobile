import { View, ScrollView } from "react-native";
import { Button } from "@/src/components/ui/button";
import { Text } from "@/src/components/ui/text";
import { router } from "expo-router";
import { tokenStorage } from "@/src/lib/tokenStorage";
import Logo from "@/assets/images/logo.svg";

export default function HomeScreen() {
  const handleLogout = async () => {
    // Clear tokens from secure storage
    await tokenStorage.removeToken();
    
    // Navigate back to login
    router.replace("/(auth)/login");
  };

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Header Section */}
        <View className="px-6 pt-16 pb-8">
          <View className="items-center mb-8">
            <Logo width={60} height={65} style={{ marginBottom: 16 }} />
            <Text variant="h1" className="text-foreground text-3xl mb-2">
              Routine Revo
            </Text>
            <Text className="text-foreground opacity-60 text-center">
              Bem-vindo ao seu app de treinos
            </Text>
          </View>
        </View>

        {/* Content Section */}
        <View className="flex-1 px-6">
          <View className="gap-4">
            {/* Welcome Card */}
            <View className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <Text className="text-foreground text-lg font-semibold mb-2">
                🎉 Login realizado com sucesso!
              </Text>
              <Text className="text-foreground opacity-70">
                Você está autenticado e pronto para começar.
              </Text>
            </View>

            {/* Info Cards */}
            <View className="gap-3">
              <View className="bg-background p-4 rounded-xl border border-foreground/10">
                <Text className="text-foreground font-semibold mb-1">
                  🏋️ Meus Treinos
                </Text>
                <Text className="text-foreground opacity-60 text-sm">
                  Em breve: Visualize suas rotinas de treino
                </Text>
              </View>

              <View className="bg-background p-4 rounded-xl border border-foreground/10">
                <Text className="text-foreground font-semibold mb-1">
                  📊 Progresso
                </Text>
                <Text className="text-foreground opacity-60 text-sm">
                  Em breve: Acompanhe sua evolução
                </Text>
              </View>

              <View className="bg-background p-4 rounded-xl border border-foreground/10">
                <Text className="text-foreground font-semibold mb-1">
                  👤 Perfil
                </Text>
                <Text className="text-foreground opacity-60 text-sm">
                  Em breve: Gerencie suas informações
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Logout Button */}
        <View className="px-6 pb-12 pt-8">
          <Button
            onPress={handleLogout}
            variant="outline"
            className="w-full h-14 rounded-xl border-2 border-destructive"
          >
            <Text className="text-destructive font-semibold">
              Sair da Conta
            </Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

