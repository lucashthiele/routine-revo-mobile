import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Text } from "@/src/components/ui/text";
import { Label } from "@/src/components/ui/label";
import { loginSchema, LoginSchema } from "../schemas/loginSchema";
import { useLogin } from "../api/useLogin";
import Logo from "@/assets/images/logo.svg";
import { useState } from "react";

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useLogin();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = (data: LoginSchema) => {
    setErrorMessage("");
    login(data, {
      onError: (err: any) => {
        let message: string;

        // Network error (server unreachable)
        if (err.code === "ERR_NETWORK" || err.message === "Network Error") {
          message =
            "Não foi possível conectar ao servidor. Verifique sua conexão.";
        }
        // Use server's error message (already in Portuguese)
        else {
          message =
            err.response?.data?.error ||
            "Erro ao fazer login. Tente novamente.";
        }

        setErrorMessage(message);
      },
    });
  };

  // TODO - Forgot Password Link: Navigate to password recovery screen
  const handleForgotPasswordPress = () => {
    // TODO: Uncomment when ForgotPasswordScreen is migrated
    // router.push('/(auth)/forgot-password' as any);
    console.log("Navigate to forgot password screen");
  };

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo and Header */}
        <View className="flex-1 flex-col items-center justify-center px-6 pb-8 pt-20">
          <Logo width={80} height={87} style={{ marginBottom: 32 }} />
          <Text variant="h1" className="text-foreground mb-2 text-2xl">
            Bem-vindo de Volta
          </Text>
          <Text className="text-foreground opacity-60 text-center">
            Entre para continuar sua jornada fitness
          </Text>
        </View>

        {/* Login Form */}
        <View className="px-6 pb-12">
          <View className="gap-4">
            {/* Email Field */}
            <View className="gap-2">
              <Label nativeID="email" className="text-foreground ml-1">
                E-mail
              </Label>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="seu.email@exemplo.com"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    className="h-14 px-4 rounded-xl text-foreground"
                    aria-labelledby="email"
                    aria-invalid={!!errors.email}
                  />
                )}
              />
              {errors.email && (
                <Text className="text-destructive text-sm ml-1">
                  {errors.email.message}
                </Text>
              )}
            </View>

            {/* Password Field */}
            <View className="gap-2">
              <Label nativeID="password" className="text-foreground ml-1">
                Senha
              </Label>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="••••••••"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    secureTextEntry
                    autoCapitalize="none"
                    autoComplete="password"
                    className="h-14 px-4 rounded-xl text-foreground"
                    aria-labelledby="password"
                    aria-invalid={!!errors.password}
                  />
                )}
              />
              {errors.password && (
                <Text className="text-destructive text-sm ml-1">
                  {errors.password.message}
                </Text>
              )}
            </View>

            {/* Forgot Password Link */}
            <View className="items-end">
              <Button
                variant="link"
                onPress={handleForgotPasswordPress}
                className="h-auto p-0"
                disabled={isPending}
              >
                <Text className="text-primary">Esqueceu a Senha?</Text>
              </Button>
            </View>

            {/* Error Message */}
            {errorMessage && (
              <View className="bg-destructive/10 p-3 rounded-lg">
                <Text className="text-destructive text-sm text-center">
                  {errorMessage}
                </Text>
              </View>
            )}

            {/* Login Button */}
            <Button
              onPress={handleSubmit(onSubmit)}
              className="w-full h-14 bg-primary rounded-xl shadow-lg shadow-primary/30 mt-2"
              disabled={isPending}
            >
              {isPending ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text className="text-primary-foreground font-semibold">
                  Entrar
                </Text>
              )}
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
